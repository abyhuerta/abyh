// import logo from './logo.svg';
// import './App.css';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import Credits from '../components/Credits';
// import '../../styles/style.css';
function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div id="about-target"></div>
      <About/>
      <div id='experience-target'></div>
      <Experience/>
      <div id='projects-target'></div>
      <Projects/>
      <Credits/>
    </div>
  );
}

export default Homepage;
