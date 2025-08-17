import '../styles/Hero.css';
import '../styles/style.css';
import '../styles/FractalTree.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import FractalTree from "./fractalTree";


function Hero(){
    return(
        <>
        <div id="hero">

            {/* <FractalTree/> */}
            <h1>Hi, I'm <span>Aby</span>.</h1>
            <h2>I'm a software engineer from Texas, passionate about building scalable applications and solving real-world problems through web development and data-driven solutions.<br/></h2>

            <h2>Say hi!</h2>
            <div id="contact">
            <Grid container spacing={0}>
                <Grid size={4}>
                <a href="https://www.linkedin.com/in/aby-huerta"><i className="bi bi-linkedin"></i></a>
                </Grid>
                <Grid size={4}>
                <a href="mailto:aby.huerta88@gmail.com"><i className="bi bi-envelope-at"></i></a>
                </Grid>
                <Grid size={4}>
                <a href="https://github.com/abyhuerta"><i className="bi bi-github"></i></a>
                </Grid>
            </Grid>
            </div>
        </div>
        </>
    );

}

export default Hero;