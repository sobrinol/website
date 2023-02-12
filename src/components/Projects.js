import React from "react";
import "./ProjectsStyle.css";
import bluesky from "./images/blueski.jpg";
import websiteport from "./images/websiteport.png";
import cristo from "./images/websiteport.png";



const Projects = () => {
    return(
        <div className = "projects">
            <img src = {bluesky} className = "bluesky"></img>
            <h2 className = "proj-title">Projects</h2>  
            <div className = "content">
                <div className = "banner">
                    <a href = "https://github.com/sobrinol/portfolio-website" target = "_blank">
                    <img src = {websiteport} className = "img1">
                    </img>
                    </a>
                    <span className = "line"></span>
                    <h2>Website Portfolio</h2>
                    <ul className = "list">
                        <li>
                            - Utilized ReactJS and its libraries to make a single page portfolio website
                        </li>
                        <li>
                            - Broadened knowledge in web design with ReactJS, Git, NodeJS, and JavaScript
                        </li>
                        <li>
                            - Accomplished my first project, I would still love to add more to this site
                        </li>
                    </ul>
                </div>
                <div className = "banner">
                    <img src = {cristo} className = "img2"></img>
                    <h2>iOS Activity Monitor Widget</h2>
                    <ul className = "list">
                        <li>
                            - IN THE WORKS
                        </li>
                        <li>
                            - X
                        </li>
                        <li>
                            - X
                        </li>
                    </ul>
                </div>

            </div>
            
        </div>
    );
}

export default Projects