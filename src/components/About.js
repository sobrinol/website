import React from "react";
import "./AboutStyle.css";
import coding from "./images/coding.jfif";
import resume from "./files/resume.pdf";

const About = () => {
  return (
    <div className='about'>
      <div className='content'>
        <img className="coding" src={coding} alt="coding"></img>
        <div className="sec2">
          <h2>About</h2>
          <p>I am a student from Harrison, NJ studying Computer Science at <a href="https://www.montclair.edu/academics/computer-science/" className="msu" target="_blank" rel="noreferrer">Montclair State University!</a></p>
          <p>As a senior Computer Science major enthusiastic about a future career in software engineering, I thrive on transforming complex problems into efficient, clear, creative, and communicative solutions.</p><br></br>
          <p>Passionate about crafting real-time systems, I'm eager to collaborate with creative minds, pushing boundaries and innovating.</p>
          <a href={resume} className="resume-button" target="_blank" rel="noreferrer">View My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default About;