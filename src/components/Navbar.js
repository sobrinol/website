import { Component } from "react";
import {MenuData} from "./MenuData";
import {Link} from "react-scroll";
import "./NavbarStyles.css";

class Navbar extends Component{
    state = {
        clicked: false
    };

    handleClick = () =>{
        this.setState({clicked:
             !this.state.clicked})
    }

    render(){
        return(
            <nav className = "NavbarItems">
                <p className = "logo">Luis Sobrino</p>
                <div className = "menu-icons" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <li className = "nav-links">
                        <Link to = "home" spy = {true} smooth = {true} offset = {0} duration = {500}  className = "Home">
                            Home
                        </Link>
                    </li>
                    <li className = "nav-links">
                        <Link to = "about" spy = {true} smooth = {true} offset = {-15} duration = {500}  className = "About">
                            About
                        </Link>
                    </li>
                    <li className = "nav-links">
                        <Link to = "projects" spy = {true} smooth = {true} offset = {-50} duration = {500}  className = "Projects">
                            Projects
                        </Link>
                    </li>
                    <li className = "nav-links">
                        <Link to = "contact" spy = {true} smooth = {true} offset = {50} duration = {500}  className = "Contact">
                            Contact
                        </Link>
                    </li>
                        
                   
                    
                </ul>
            </nav>
        );
    }
}

export default Navbar;