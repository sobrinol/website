import React from "react";
import "./ProjectsStyle.css";
import websiteport from "./images/websiteport.png";
import montclarionport from "./images/montclarionport.png";
import mcmarketport from "./images/mcmarket.png";
import sommaport from "./images/somma.png";

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
                Awarded Overall Best Website at the New Jersey Press Foundation (NJPF) 2024 awards
              </li>
              <li>
                Worked with Wordpress to re-design The Montclarion's website to appeal to a broader audience and give its interface a smoother UI and UX
              </li>
              <li>
                Obtained experience in SFTP and site data migration by migrating over 32GB of post data from previous production environment to new production
              </li>
              <li>
                Engaged in the reduction of bandwidth by 300% making pages faster to load and an making it easier to navigate the site
              </li>
            </ul>
          </div>
          <div className="banner">
              <img src={sommaport} alt="Somma" />
              <span className="line"></span>
              <h2>SOMMA Music Player</h2>
            <ul>
              <li>
                Lead, designed, and implemented a full-stack music player web application in a team environment using agile development, showcasing ability to work collaboratively and integrate diverse software systems
              </li>
              <li>
                Developed a dynamic, tap to the beat game (TTB!) using JavaScript to enhance user engagement
              </li>
              <li>
                Applied Firebase Authentication/Functions/Firestore to keep track of real-time, application-wide user leaderboard
              </li>
              <li>
                Utilized Spotify API for web player, searching, populating content, and song analytics/features for TTB! game logic
              </li>
            </ul>
          </div>
          <div className="banner">
              <img src={mcmarketport} alt="MCMarket" />
              <span className="line"></span>
              <h2>The Minecraft Cutout Market</h2>
            <ul>
              <li>
                Wrote e-commerce website in PHP with a mySQL database backend, utilized CSS for stlying
              </li>
              <li>
                Implemented secure user login with hashed passwords using the built-in PHP b-crypt algorithm as well as secure admin login and module
              </li>
              <li>
                Added functionality for searching, category based browsing, cart functionality, and a mock checkout function (Could not implement real checkout as it violated project policy)
              </li>
            </ul>
          </div>
          <div className="banner">
            <a className="project-links" href="https://github.com/sobrinol/website" target="_blank" rel="noreferrer">
              <img src={websiteport} alt="Website Portfolio" />
              <span className="line"></span>
              <h2>Website Portfolio</h2>
            </a>
            <ul>
              <li>
                Utilized ReactJS and its libraries to make a single page portfolio website
              </li>
              <li>
                Broadened knowledge in web design with ReactJS, Git, and JavaScript
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
