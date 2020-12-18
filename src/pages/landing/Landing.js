import React from 'react'
import {Fade} from 'react-reveal'
import './Landing.css'
import Arrow from './assets/next.png'
const Landing = ({handleClick}) => {
  
    return (
     
        <section className="container">
          <div className="layers">
          <div className="base">
          <Fade top>
          <h1>Hi, I'm Eric </h1>
          
          </Fade>
          </div>
         
          <div className="overlay">
            <h2>I'm a Software Engineer</h2>
            <img src={Arrow} alt="downward-arrow" onClick={handleClick}/>
          </div>
          
          </div>
        </section>

        
    )
}

export default Landing
