import { Component } from "react";
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
                <p className = "logo"><Link to = "home" spy = {true} smooth = {true} offset = {0} duration = {500} className = "LogoC">
                            Luis Sobrino
                        </Link></p>
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
                        <Link to = "about" spy = {true} smooth = {true} offset = {-70} duration = {500}  className = "About">
                            About
                        </Link>
                    </li>
                    <li className = "nav-links">
                        <Link to = "projects" spy = {true} smooth = {true} offset = {-70} duration = {500}  className = "Projects">
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;