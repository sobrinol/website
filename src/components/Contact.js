import React from "react";
import "./ContactStyle.css";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import vlr from "./images/vvlr.png";


const Contact = () => {
    return(
        <div className = "contact">
            <div className = "contact-content">
                <a href = "https://www.linkedin.com/in/luis-f-sobrino/" className = "linkedin" target = "_blank" rel = "noreferrer">
                    <i class="fa-brands fa-linkedin-in"></i>                    </a>
                <a href = "https://github.com/sobrinol" className = "github" target = "_blank" rel = "noreferrer">
                    <i class="fa-brands fa-github"></i>                </a>
                <a href = "https://www.vlr.gg/player/32480/blis" className = "vlr" target = "_blank" rel = "noreferrer">
                    <i class="fa-solid fa-gamepad"></i>
                </a>
            </div>
        </div>
    )
}

export default Contact