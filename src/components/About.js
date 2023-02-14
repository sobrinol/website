import React from "react";
import "./AboutStyle.css";
import cyberhawks from "./images/coding.jfif";
import resume from "./files/resume.pdf";

const About = () => {
    return (
        <div className = 'about'>
            <div className = 'content'>
                <img className = "cyberhawks" src = {cyberhawks} alt = "cyberhawks"></img>
                <div className = "sec2">
                    <h2>About</h2>
                    <p>I am a student from Harrison, NJ studying Computer Science at <a href = "https://www.montclair.edu/academics/computer-science/" className = "msu" target = "_blank">Montclair State University!</a></p>
                    <p>I am also a varsity player in Montclair State University's Valorant Team</p>
                    <br></br>
                    <p>As a kid, my father owned a computer cafe; maintaining computers and
                    editing time-managing software was how I was introduced to computer science</p>
                    <br></br>
                    <p>Ever since, a child's imagination and sense to engineer has never stopped running</p>
                    <a href= {resume} className = "resume-button" target = "_blank">View My Resume</a>
                </div>
            </div>
        </div>
    )
}

export default About;