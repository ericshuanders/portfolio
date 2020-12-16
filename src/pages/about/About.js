import React, {useEffect} from 'react'
import './About.css'
import Typed from 'typed.js';
import Headshot from './assets/headshot2.jpeg';



const About = () => {
    
   useEffect (()=>{const options = {
        strings:['Coffee.', 'Writing Clean Code.', 'Solving Puzzles.', 'Beautiful Web Design.'],
        typeSpeed: 40,
        backSpeed: 35,
        loop: true
       

    };
    const typed = new Typed('.string', options)}, [])

    return (
        
        <div className="about-container">
            
            <h2>What gets me up in the morning?</h2> 
            <h2><span className="string"/></h2>
            <div className="personal">
            <div className="pictures">
            <img className="headshot" src={Headshot}/>
           
            </div>
            

            <div className="description">
            <h3 >I used to spend my days playing in orchestras and teaching clarinet.</h3>
            <h3> Now, I spend my days building applications with alluring and intuitive user experiences. I work primarily in JavaScript and React.</h3>
            </div>
            </div>
            
            
        </div>
        
    )
}

export default About
