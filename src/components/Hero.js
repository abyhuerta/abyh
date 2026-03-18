import '../styles/Hero.css';
import '../styles/style.css';

function Hero(){
    return(
        <div id="hero">

            {/* LEFT: circular portrait + spinning text ring + ABY vertical */}
            <div className="hero-left">
                <div className="hero-circle-wrapper">
                    <svg className="hero-spin-svg" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150 150 m -128 0 a 128 128 0 1 1 256 0 a 128 128 0 1 1 -256 0"
                            />
                        </defs>
                        <text className="hero-spin-text">
                            <textPath href="#circlePath">
                                ✦ made with love — ✦ aby huerta — ✦
                            </textPath>
                        </text>
                    </svg>
                    <img src="/img/image.png" alt="Aby" className="hero-portrait" />
                </div>

                <div className="hero-name-vert" aria-label="ABY">
                    <span>A</span>
                    <span>B</span>
                    <span>Y</span>
                </div>
            </div>

            {/* CENTER: tagline, description, buttons */}
            <div className="hero-center">
                <h1 className="hero-tagline">
                    We are a way for<br/>
                    <span className="hero-tagline-em">the universe to know itself</span>
                </h1>
                <p className="hero-desc">
                    Software engineer from Texas, passionate about building scalable
                    applications and solving real-world problems through web development
                    and data-driven solutions.
                </p>
                <div className="hero-btns">
                    <a href="https://github.com/abyhuerta" className="hero-btn">github</a>
                    <a href="https://www.linkedin.com/in/aby-huerta/" className="hero-btn">linkedin</a>
                </div>
            </div>


        </div>
    );
}

export default Hero;
