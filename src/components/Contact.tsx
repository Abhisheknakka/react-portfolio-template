import React from "react";
import '../assets/styles/Contact.scss';
import profile_photo from '../assets/images/profile_photo.jpg';

import { Box, Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <div className="contact_wrapper">
              <Typography variant="h3">Contact Me</Typography>
              <Typography variant="body1">Got a project waiting to be realized? Let's collaborate and make it happen!</Typography>

              {/* Social Media Section */}
              <Box component="div" className="social-media-container">
                <Typography variant="body1">Feel free to reach out to me through the following platforms:</Typography>
                <div className="social-links">
                  <a href="https://github.com/Abhisheknakka" target="_blank" rel="noreferrer">
                    <GitHubIcon sx={{ fontSize: 50 }} />
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-nakka-2a7755159/" target="_blank" rel="noreferrer">
                    <LinkedInIcon sx={{ fontSize: 50 }} />
                  </a>
                  <a href="mailto:nakka.abhishek99@gmail.com" target="_blank" rel="noreferrer">
                    <EmailIcon sx={{ fontSize: 50 }} />
                  </a>
                  <a href="https://www.instagram.com/_nakka_abhishek_/" target="_blank" rel="noreferrer">
                    <InstagramIcon sx={{ fontSize: 50 }} />
                  </a>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="photo-placeholder">
              {/* Replace with your vertical photo */}
              <img
                src={profile_photo} // Replace with your image path
                alt="Your Profile"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;