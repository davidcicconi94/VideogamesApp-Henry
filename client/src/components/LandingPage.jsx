import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.style.css";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";

const LandingPage = () => {
  return (
    <div className="full">
      <div className="all">
        <div className="content">
          <h1 className="my-title">VIDEOGAMES APP - by David Cicconi</h1>
          <div className="links">
            <div className="icon">
              <a
                href="https://github.com/davidcicconi94"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/david-cicconi-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
            <div className="icon">
              <a
                href="mailto:david.cicconi94@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gmail} alt="gmail" />
              </a>
            </div>
          </div>
        </div>
        <Link to="/home">
          <button className="btn-landing">START</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
