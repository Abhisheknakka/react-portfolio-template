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
          <div className="resume-contact">
            <p>
              📄 <a href="https://drive.google.com/file/d/1f0439jlZ2gLv0yvneT6QvOXkPgqKtyU4/view?usp=drive_link" target="_blank" rel="noreferrer">
                View My Resume
              </a>
            </p>
            <p>
              📧 <a href="mailto:nakka.abhishek99@gmail.com">nakka.abhishek99@gmail.com</a>
            </p>
            <p>
              📞 +1 (123) 456-7890
            </p>
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
