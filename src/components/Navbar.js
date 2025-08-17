import React from "react";
import {Link} from 'react-router-dom'
import '../styles/style.css';
import '../styles/Navbar.css';

function Navbar(){
        return(
            <nav className="navbar navbar-expand-lg fixed-top " data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Aby Huerta</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" aria-current="page" href="/">Home</a>
          <a href="#about-target" className="nav-link">About Me</a>
          <a href="#experience-target" className="nav-link">Experience</a>
          <a href="#projects-target" className="nav-link">Projects</a>
          {/* <Link className="nav-link" to="/hpml">Research</Link> */}
        </div>
      </div>
    </div>
  </nav>
        )
    }
export default Navbar;