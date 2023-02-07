import React from "react";
import "./AboutStyle.css";
import {Document, Page} from "react-pdf";


/*
* Work on PDF plsplsplsspl for resume!!!
*/

const About = () => {
    return (
        <div className = 'about'>
            <div className = 'content'>
            
                <div className = "sec2">
                    <h2>About</h2>
                    <span className = "line"></span>
                    <p>I am Computer Science Major at  Montclair State University</p>
                    <p>As a kid, my father owned a computer cafe; maintaining the computers and </p>
                    <p>editing time managing software was how I was introduced to computer science.</p>
                    <p>Ever since, a child's imagination and sense to engineer has never stopped running</p>
                </div>
            </div>
        </div>
    )
}

export default About;