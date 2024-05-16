import React from "react";
import "./ProjectsStyle.css";
import websiteport from "./images/websiteport.png";
import montclarionport from "./images/montclarionport.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project-content">
        <h2 className="proj-title">Projects</h2>
        <div className="banners-grid">
          <div className="banner">
            <a className="project-links" href="https://themontclarion.org/" target="_blank" rel="noreferrer">
              <img src={montclarionport} alt="The Montclarion Website" />
              <h2>The Montclarion Website</h2>
            </a>
            <ul>
              <li>
                Broadened knowledge of website building by using Wordpress to re-build and re-design the Montclarion's website
              </li>
              <li>
                Obtained experience in SFTP and site data migration by migrating over 32GB of post data from the old page to the redesigned one
              </li>
              <li>
                Learnt about SEO optimization and expanded design knowledge
              </li>
            </ul>
          </div>
          <div className="banner">
            <a className="project-links" href="https://github.com/sobrinol/portfolio-website" target="_blank" rel="noreferrer">
              <img src={websiteport} alt="Website Portfolio" />
              <span className="line"></span>
              <h2>SOMMA Music Player</h2>
            </a>
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
          <div className="banner">
            <a className="project-links" href="https://github.com/sobrinol/portfolio-website" target="_blank" rel="noreferrer">
              <img src={websiteport} alt="Website Portfolio" />
              <span className="line"></span>
              <h2>Website Portfolio</h2>
            </a>
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
          <div className="banner">
            <a className="project-links" href="https://github.com/sobrinol/portfolio-website" target="_blank" rel="noreferrer">
              <img src={websiteport} alt="Website Portfolio" />
              <span className="line"></span>
              <h2>Website Portfolio</h2>
            </a>
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
