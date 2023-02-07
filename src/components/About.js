import React from "react";
import "./AboutStyle.css";
import cyberhawks from "./images/cyberhawks.jpg"

const About = () => {
    return (
        <div className = 'about'>
            <div className = 'content'>
                <img className = "cyberhawks" src = {cyberhawks} alt = "cyberhawks"></img>
                <div className = "sec2">
                    <h2>About</h2>
                    <p>I am a student from Harrison, NJ studying Computer Science (B.S.) at <a href = "https://www.montclair.edu/">Montclair State University!</a></p>
                    <p>As a kid, my father owned a computer cafe.</p>
                    <p>Maintaining computers and editing time-managing<br>
                    </br>software was how I was introduced to computer science.</p>
                    <br></br>
                    <p>Ever since, a child's imagination and sense to engineer has never stopped running</p>
                    <button className = "resume-button">View My Resume</button>
                </div>
            </div>
        </div>
    )
}

export default About;