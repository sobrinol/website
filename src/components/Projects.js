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
                            - Utilized ReactJS and its libraries to make a single page app
                        </li>
                        <li>
                            - Broadened knowledge in web design with ReactJS
                        </li>
                        <li>
                            - blahblahblahblah
                        </li>
                    </ul>
                </div>
                <div className = "banner">
                    <img src = {cristo} className = "img2"></img>
                    <h2>iOS Activity Monitor Widget</h2>
                    <ul className = "list">
                        <li>
                            - Used and learnt ReactJS and JSX to make a single page app
                        </li>
                        <li>
                            - Broadened knowledge in web design with React libraries
                        </li>
                        <li>
                            - blahblahblahblah
                        </li>
                    </ul>
                </div>

            </div>
            
        </div>
    );
}

export default Projects