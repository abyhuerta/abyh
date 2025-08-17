import React, { useRef, useEffect } from "react";
import p5 from "p5";

const FractalTree = () => {
  const sketchRef = useRef();

  useEffect(() => {
    let p5Instance;
    const sketch = (p) => {
      // Tunables
      const lengthFactor = 0.7;
      const maxDepth = 10;
      const delayFrames = 1;
      const segmentCount = 10;

      // State
      let angle = 0;
      const segmentProgress = Array.from({ length: maxDepth + 1 }, () => ({
        segmentsDrawn: 0,
        maxSegments: segmentCount,
      }));
      let baseLen = 200;        // recalculated on resize
      let scaleFactor = 1;      // recalculated on resize
      let treeScale = 0.4;      // recalculated on resize

      // Precomputed per depth
      const depthLen = new Array(maxDepth + 1);
      const depthColor = new Array(maxDepth + 1);
      const depthWeight = new Array(maxDepth + 1);

      const cold = [204, 214, 246];
      const warm = [100, 255, 218];
      const lerp = (a, b, t) => a + (b - a) * t;

      const recomputePerDepth = () => {
        // baseLen depends on canvas height; set in resize/setup first
        for (let d = 0; d <= maxDepth; d++) {
          const len = baseLen * Math.pow(lengthFactor, d);
          depthLen[d] = len;
          const t = d / maxDepth;
          const c = p.color(
            lerp(cold[0], warm[0], t),
            lerp(cold[1], warm[1], t),
            lerp(cold[2], warm[2], t)
          );
          depthColor[d] = c;
          depthWeight[d] = p.map(len, 5, 150, 1, 8, true);
        }
      };

      const recalcResponsive = () => {
        const parent = sketchRef.current;
        const parentWidth = parent ? parent.clientWidth : 600;
        const small = window.innerWidth < 500;
        const canvasWidth = parentWidth * (small ? 0.9 : 0.75);
        const canvasHeight = canvasWidth * (small ? 1.0 : 0.5); // keep consistent with setup
        p.resizeCanvas(canvasWidth, canvasHeight);
        scaleFactor = Math.min(p.width / 550, 1.2);
        treeScale = small ? 0.9 : 0.4;
        baseLen = p.height * (small ? 0.5 : 0.4);
        recomputePerDepth();
      };

      p.setup = () => {
        const parent = sketchRef.current;
        const parentWidth = parent ? parent.clientWidth : 600;
        const small = window.innerWidth < 500;
        const canvasWidth = parentWidth * (small ? 0.9 : 0.75);
        const canvasHeight = canvasWidth * (small ? 1.0 : 0.5);

        p.createCanvas(canvasWidth, canvasHeight).parent(parent);
        p.frameRate(30);

        // Big perf gain on retina if desired
        p.pixelDensity(1);

        scaleFactor = Math.min(p.width / 550, 1.2);
        treeScale = small ? 0.9 : 0.4;
        baseLen = p.height * (small ? 0.5 : 0.4);
        recomputePerDepth();

        window.addEventListener("resize", recalcResponsive);
      };

      p.draw = () => {
        p.background(10, 25, 47);

        // animate sway
        angle = p.radians(25) + p.radians(10) * p.sin(p.millis() * 0.001);

        p.push();
        p.stroke(255);
        p.translate(p.width / 2, p.height);
        p.scale(scaleFactor * treeScale);

        drawBranch(0); // start at depth 0
        p.pop();

        if (p.frameCount % delayFrames === 0) {
          for (let i = 0; i <= maxDepth; i++) {
            const s = segmentProgress[i];
            if (s.segmentsDrawn < s.maxSegments) {
              s.segmentsDrawn++;
              break;
            }
          }
        }
      };

      function drawBranch(depth) {
        if (depth > maxDepth || depthLen[depth] < 5) return;

        const len = depthLen[depth];
        const s = segmentProgress[depth];
        const segmentLength = len / s.maxSegments;

        p.stroke(depthColor[depth]);
        p.strokeWeight(depthWeight[depth]);

        for (let i = 0; i < s.segmentsDrawn; i++) {
          p.line(0, -i * segmentLength, 0, -(i + 1) * segmentLength);
        }
        if (s.segmentsDrawn < s.maxSegments) return;

        p.translate(0, -len);

        p.push();
        p.rotate(angle);
        drawBranch(depth + 1);
        p.pop();

        p.push();
        p.rotate(-angle);
        drawBranch(depth + 1);
        p.pop();
      }

      p.remove = (() => {
        // extend remove so we also detach resize handler
        const superRemove = p.remove.bind(p);
        return () => {
          window.removeEventListener("resize", recalcResponsive);
          superRemove();
        };
      })();
    };

    p5Instance = new p5(sketch);

    return () => {
      p5Instance && p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} />;
};

export default FractalTree;
