import React from "react";
import "./ProjectsStyle.css";
import websiteport from "./images/websiteport.png";




const Projects = () => {
    return(
        <div className = "projects">
            <div className = "project-content">
            <h2 className = "proj-title">Projects</h2> 
                <div className = "banners-grid">
                <div className = "banner">
                    <a href = "https://github.com/sobrinol/portfolio-website" target = "_blank">
                    <img src = {websiteport}>
                    </img>
                    </a>
                    <span className = "line"></span>
                    <h2>Website Portfolio</h2>
                    <ul>
                        <li>
                            Utilized ReactJS and its libraries to make a single page portfolio website
                        </li>
                        <li>
                            Broadened knowledge in web design with ReactJS, Git, NodeJS, and JavaScript
                        </li>
                        <li>
                            Accomplished my first project, I would still love to add more to this site
                        </li>
                    </ul>
                </div>
                <div className = "banner">
                    <img src = {websiteport}></img>
                    <h2>iOS Activity Monitor Widget</h2>
                    <ul>
                        <li>
                            Current Project
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            
        </div>
    );
}

export default Projects