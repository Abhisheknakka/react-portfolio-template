import React from "react";
import '../assets/styles/Contact.scss';

import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          
          {/* Social Media Section */}
          <Box component="div" className="social-media-container">
            <p>Feel free to reach out to me through the following platforms:</p>
            <div className="social-links">
              <a href="https://github.com/Abhisheknakka" target="_blank" rel="noreferrer">
                <GitHubIcon sx={{ fontSize: 50 }} />
              </a>
              <a href="https://www.linkedin.com/in/abhishek-nakka-2a7755159/" target="_blank" rel="noreferrer">
                <LinkedInIcon sx={{ fontSize: 50 }} />
              </a>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
