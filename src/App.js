import React from 'react';
import './App.css';
import {Landing} from './pages/landing'
import {About} from './pages/about';
import {Projects} from './pages/projects'
function App() {
  return (
    <div className="App">
     <Landing/>
     <About/>
     <Projects/>
    </div>
  );
}

export default App;
