import React from 'react'
import './Projects.css'
import Brewdog from './assets/brewdog.jpg'
import SIO from './assets/Logo.png'
import {motion} from "framer-motion"

const Projects = () => {

    const sites = [
        {title: 'Stretch It Out',
        image: SIO,
        
    }
    ]
    return (
        <div className="projects-container">
            <h1 className="project-header">Some Projects I've Worked On:</h1>
            <div className="projects">
            <h2>Stretch It Out</h2>
               <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration: .7}}><img src={SIO}/></motion.div>
                <h3>Learn new stretches and track your flexibility</h3>
                <h2>PAWUADRINK</h2>
                <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}} transition={{duration: .7}}><img className="brewdog"src={Brewdog}/></motion.div>
                <h3>Get brewer-level stats on your favorite beers</h3>
               

            </div>
        </div>
    )
}

export default Projects
