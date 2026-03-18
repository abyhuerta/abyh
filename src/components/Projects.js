import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '../styles/Projects.css';

function Projects() {
  const starprojects = {
    'Cosmos': {
        techstack: ["three.js"],
        desc: 'A 3D solar system simulation built with Three.js.',
        link: 'https://github.com/abyhuerta/Cosmos',
        open: 'https://abyhuerta.github.io/Cosmos/',
        image: '/img/orbit.png'
    },
    'GEN-QR': {
        techstack: ['moment.js', 'APIs', 'JavaScript'],
        desc: 'A QR code generator that converts user input into a downloadable PNG.',
        link: 'https://github.com/abyhuerta/gen-QR',
        open: 'https://abyhuerta.github.io/gen-QR/',
        image: '/img/genQR.png'
    },
    'Embedded Systems Project': {
        techstack: ['Firebase', 'JavaScript', 'HTML'],
        desc: 'An e-commerce platform for aromatic products with Firebase integration.',
        link: '_blank',
        open: 'https://youtu.be/cdJd2ql5n7c?si=surA_IT6c8eH2sRu',
        image: '/img/image copy 3.png'
    }
};

    const project = {
      'DocuScanner': {
          techstack: ['Angular', 'Firebase'],
          desc: 'A document scanner that processes images of documents to PDFs + stores them.',
          link: 'https://github.com/abyhuerta/document-scanner',
          open: 'https://github.com/abyhuerta/document-scanner'
      },
      'NutriPass': {
          techstack: ['Flask', 'React.js', 'Python'],
          desc: 'A grocery filtering app that identifies items based on dietary needs.',
          link: 'https://github.com/abyhuerta/NutriPass',
          open: 'https://github.com/abyhuerta/NutriPass',
      },
      'MINST': {
          techstack: ['Python'],
          desc: 'A neural network for handwritten digit recognition.',
          link: 'https://github.com/abyhuerta/MINST',
          open: 'https://github.com/abyhuerta/MINST',
      },
      'Ramos Boxing Gym Member System': {
          techstack: ['Android Studio', 'SQLite', 'Java'],
          desc: 'A mobile app for managing gym memberships and attendance.',
          link: 'https://github.com/abyhuerta/Ramos-Boxing-Gym-Member-System',
          open: 'https://github.com/abyhuerta/Ramos-Boxing-Gym-Member-System',
      },
      'Ocean-card-matching-game': {
          techstack: ['JavaScript', 'HTML'],
          desc: 'A simple and interactive ocean-themed card matching game.',
          link: 'https://github.com/abyhuerta/ocean-card-match-game',
          open: 'https://abyhuerta.github.io/ocean-card-match-game/',
      },
      'Aromagic':{
          techstack: ['Firebase', 'JavaScript', 'HTML'],
          desc: 'An e-commerce platform for aromatic products with Firebase integration.',
          link: 'https://github.com/abyhuerta/Aromagic',
          open: '_blank',
      }
    };
    

    const starprojectKeys = Object.keys(starprojects);
    const projectKeys = Object.keys(project);

    return (
      <>
      <div id="projects">
      <h2 className="header">./projects</h2>
        <div id="carouselExampleCaptions" className="carousel slide">
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {starprojectKeys.map((key, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
    
          {/* Carousel Items */}
          <div className="carousel-inner">
            {starprojectKeys.map((key, index) => {
              const project = starprojects[key];
              return (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img src={project.image} className="d-block w-100" alt={key} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{key}</h5>
                    <p>{project.desc}</p>
                    <p>
                      <span>{project.techstack.join(', ')}</span>
                    </p>
                    <div>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mx-1">
                          <i className="bi bi-github"></i>
                        </a>
                      )}
                      {project.open && (
                        <a href={project.open} target="_blank" rel="noopener noreferrer" className=" mx-1">
                          <i className="bi bi-window"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
              );
            })}
          </div>
    
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {projectKeys.map((key,index) => {
          const currproject = project[key];
          return(
            <Grid key={index} size={{xs:12,sm:6,md:4}}>
              <div className='card'>
                <div className='bard-body'>
                  <h5 className='card-title'>{key}</h5>
                  <h6 className='card-subtitle'>{currproject.techstack.join(', ')}</h6>
                  <p className='card-text'>{currproject.desc}</p>
                  <a className='card-link' href={currproject.link}><i className="bi bi-github"></i></a>
                  <a className='card-link' href={currproject.open}>  <i className="bi bi-window"></i></a>
                </div>
              </div>

            </Grid>
          )
        })}
      </Grid>
    </Box>
    </div>
        </>
    );
}

export default Projects;
