import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '../styles/style.css';
import '../styles/About.css';

function About() {
    const intro = (
        <p>
            I am currently a Computer Science tutor at the{' '}
            <span>
                <a href="https://www.utsa.edu/about/#_ga=2.19426552.1357921105.1709004535-115529336.1699502345">
                    University of Texas at San Antonio
                </a>
            </span>{' '}
            for the CS Department and am conducting research with the{' '}
            <span>
                <a href="https://xintingyu.com/my-lab-at-ucsc/">
                    Planetary Model CHaractErization Facility (PMCHEF)
                </a>
            </span>{' '}
            lab under the direction of Dr. Yu. I am also pursuing a full-time Bachelor of Science in Computer Science
            with a concentration in Software Engineering and Data Science. I've been working with several technologies,
            including:
        </p>
    );

    const extra = (
        <p>
            When I'm not working, I like to follow the developments of science (specifically the cosmos), cooking, and I
            enjoy creating art.
        </p>
    );

    const technologies = ["Javascript ES6+", "React.js", "Java", "Python", "AWS", "PHP"];

    return (
        <div id="about">
            <h2 className="header">./about</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={8}>
                    <Grid size={8}>
                        <div>
                            {intro}
                            <ul className="tech-stack">
                                {technologies.map((tech_item, i) => (
                                    <li key={i}>
                                        <span>{tech_item}</span>
                                    </li>
                                ))}
                            </ul>
                            {extra}
                        </div>
                    </Grid>
                    <Grid size={4}>
                        <div>
                            <figure className="figure">
                                <img src="/img/science.jpeg" className="figure-img img-fluid rounded" alt="..." />
                                <figcaption className="figure-caption">
                                    Some Mars rovers that are at the NASM
                                </figcaption>
                            </figure>
                            <figure className="figure">
                                <img src="/img/art.png" className="figure-img img-fluid rounded" alt="..." />
                                <figcaption className="figure-caption">
                                    A drawing inspired by the Lovers of Valdaro
                                </figcaption>
                            </figure>
                            {/* <img src='/img/me.jpg'></img> */}
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default About;
