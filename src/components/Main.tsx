import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import myProfilePic from "../assets/images/profile-pic.png";
import azure_badge from '../assets/images/azure_badge.png';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myProfilePic} alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AbhishekNakka" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-nakka-2a7755159/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Abhishek Nakka</h1>
          <p>Data Engineer</p>

          {/* === Resume and Contact Block === */}
          <div className="resume-box">
            <div className="resume-contact compact">
              {/*
              remove after shyftlabs
              <a className="resume-link" href="https://drive.google.com/file/d/1zm0PkFEU0SkFRYxCumxbj2lvON1QeFi6/view?usp=sharing" target="_blank" rel="noreferrer">
                📄 Resume
              </a>
              */}

              {/* 
              <a className="email-link" href="mailto:nakka.abhishek99@gmail.com">
                📧 nakka.abhishek99@gmail.com
              </a>
              */}
            </div>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/AbhishekNakka" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-nakka-2a7755159/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
