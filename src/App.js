import React, {useRef} from 'react';
import './App.css';
import {Landing} from './pages/landing';
import {About} from './pages/about';
import {Projects} from './pages/projects';
import {Contact} from './pages/contact'
function App() {

  const aboutRef = useRef()
  const handleClick=()=>{
    aboutRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  return (
    <div className="App">
     
     <Landing handleClick={handleClick}/>
     <About ref={aboutRef}/>
     <Projects/>
     <Contact/>
    
    </div>
  );
}

export default App;
