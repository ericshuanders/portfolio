import React from "react";
import "./Contact.css";
import Linkedin from "./assets/linkedin.png";
import Github from "./assets/github.png";
import Mail from "./assets/mail.png";
import Resume from "./assets/google-docs.png";
import ResumePDF from './assets/eric-resume.pdf'
import Jump from 'react-reveal/Jump'

const Contact = () => {
  const icons = [
    {
     
      src: Linkedin,
      link: "http://linkedin.com/in/eric-shu-anderson",
    },
    {
      
      src: Github,
      link: "http://github.com/ericshuanders",
    },
    {  src: Mail,
link: "mailto:ericshuanders@gmail.com" },
    { name: "Resume", src: Resume, link: ResumePDF},
  ];

  return (
    <div className="contact-container">
      <Jump><h2>Let's stay in touch!</h2></Jump>
      <h4>Eric Anderson | ericshuanders@gmail.com</h4>
      
      <div className="contact-methods">
        {icons.map((icon, index) => (
          <a key = {index} href={icon.link} target="_blank" rel="noreferrer">
            
            <div className="contact">
              <img src={icon.src} />
              
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
