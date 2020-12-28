import React from "react";
import "./Projects.css";
import Brewdog from "./assets/brewdog.jpg";
import BrewdogHome from "./assets/Paw-landing.png";
import SIO from "./assets/Logo.png";
import SIOHome from "./assets/Stretch-home.png";
import { motion } from "framer-motion";

const Projects = () => {
  const sites = [
    {
      title: "Stretch It Out",
      logo: SIO,
      image: SIOHome,
      link: "https://stretchitout.herokuapp.com/",
      alt: "Stretch It Out app"
    },
    {
      title: "PAWUADRINK",
      logo: Brewdog,
      image: BrewdogHome,
      link: "https://paw-u-a-drink.herokuapp.com/",
      alt: "PAWUADRINK app"
    },
    

  ];
  return (
    <section className="projects-container">
      <h2 className="project-header">Some Projects I've Worked On:</h2>
      <div className="project-list">
        {sites.map((site, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.7 }}
          >
            <div key = {index} className="image-container">
              <img src={site.logo} />
              <a href={site.link} target="_blank" rel="noreferrer">
                <img className="transition-image" src={site.image} alt={site.alt}/>
              </a>
              <h3>{site.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default Projects;
