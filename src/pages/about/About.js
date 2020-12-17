import React, { useEffect } from "react";
import "./About.css";
import Typed from "typed.js";
import Fade from 'react-reveal/Fade'
import Headshot from "./assets/headshot2.jpeg";
import JavaScript from "./assets/javascript.png";
import HTML from "./assets/html-5.png";
import CSS from "./assets/css.png";
import Reactjs from "./assets/react.png";
import Node from "./assets/nodejs.png";

const About = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Coffee.",
        "Writing Clean Code.",
        "Solving Puzzles.",
        "Beautiful Web Design.",
      ],
      typeSpeed: 40,
      backSpeed: 35,
      loop: true,
    };
    const typed = new Typed(".string", options);
  }, []);
  const codes = [
    { name: "JS", image: JavaScript, alt: "JavaScript" },
    { name: "HTML", image: HTML, alt: "HTML" },
    { name: "CSS", image: CSS, alt: "CSS" },
    { name: "React", image: Reactjs, alt: "React" },
    { name: "Node", image: Node, alt: "Node" },
  ];

  return (
    <section className="about-container">
      <h2>What gets me up in the morning?</h2>
      <h2>
        <span className="string" />
      </h2>
      <div className="personal">
        <div className="pictures">
          <img className="headshot" src={Headshot} />
        </div>

      
          <div className="desc-text">
          <h3 >
            I used to spend all day<span className="clarinet"><a href="http://ericandersonclarinet.com" target="_blank" rel="noreferrer"> playing and teaching clarinet</a></span>.
          </h3>
          <h3 >
            Now, I spend my time building applications with alluring and
            intuitive user experiences. Some of my favorite languages and frameworks include:
          </h3>
          </div>
            <Fade left cascade>
          <div className="code-group">
            {codes.map((code) => (
              <div className="code">
                <img src={code.image} alt={code.alt} />
                <p>{code.name}</p>
              </div>
            ))}
          </div>
          </Fade>
        
        
      </div>
    </section>
  );
};

export default About;
