import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import MainBanner from './MainBanner/MainBanner';
import NavbarMain from "./Navbar/NavbarMain"
import Projects from './Projects/Projects';
import TechSlider from './Technologies/TechSlider';


const LandingPage = () => {
  return (
    <div>
        <div className="container-fluid p-0" style={{backgroundColor:"#000"}}>
            <NavbarMain />
            <MainBanner/>
            <AboutMe />
            <TechSlider/>
            <Projects />
        </div>
    </div>
  )
}

export default LandingPage