import React from "react";
import "./ContactStyle.css";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import vlr from "./images/vvlr.png";


const Contact = () => {
    return(
        <div className = "contact">
            <div className = "contact-content">
                <ul>
                    <li> 
                        <h2>Contact Me:</h2>
                    </li>
                    <li>
                         - Email: theluissobrino@gmail.com
                    </li>
                    <li>
                        - Phone: (201)-702-0392
                    </li>
                </ul>
                <div className = "buttons">
                    <a href = "https://www.linkedin.com/in/luis-f-sobrino/" className = "linkedin">
                        <img src = {linkedin}></img>
                    </a>
                    <a href = "https://github.com/sobrinol" className = "github">
                        <img src = {github}></img>
                    </a>
                    <a href = "https://www.vlr.gg/player/32480/blis" className = "vlr">
                        <img src = {vlr}></img>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact