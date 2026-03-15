
import React from "react";
import '../assets/styles/Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Abhishek Nakka &mdash; Data Engineer</p>
      <p style={{ opacity: 0.5, fontSize: '0.85em', marginTop: '8px' }}>
        &copy; {currentYear} &middot; Built with React &amp; TypeScript
      </p>
    </footer>
  );
}

export default Footer;
