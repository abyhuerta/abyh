import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '../styles/style.css';
import '../styles/About.css';

function About() {
    const intro = (
            <p>
            I am currently a <b>Full Stack Developer</b> at <a href="https://scooterlab.utsa.edu/"> Scooter Lab</a> and a <b>full-time student</b> at  
    <a href="https://www.utsa.edu/"> The University of Texas at San Antonio</a> where I'm pursuing a <b>Bachelor of Science in Computer Science</b> with a concentration in <b>Software Engineering</b>. I've been working with several technologies,
            including:
        </p>
    );

    const extra = (
        <p>
            When I'm not working, I like to follow the developments of science (specifically the cosmos), cooking, and I
            enjoy creating art.
        </p>
    );

    const technologies = ["Javascript ES6+", "React + Angular", "Java", "SpringBoot", "MySQL", "PHP", "AWS"];

    return (
        <div id="about">
            <h2 className="header">./about</h2>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={8}>
                    <Grid size={{xs:12,sm:6,md:8}}>
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
                    <Grid size={{xs:12,sm:6,md:4}}>
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
