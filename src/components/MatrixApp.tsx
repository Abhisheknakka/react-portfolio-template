import React, { useState, useEffect } from "react";
import {
  Main,
  Education,
  Certifications,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from ".";
import MatrixBackground from './MatrixBackground';
import './MatrixApp.scss';
import '../assets/styles/MatrixTheme.scss';

function MatrixApp() {
  const [mode, setMode] = useState<string>('dark');
  const [glitchText, setGlitchText] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    // Glitch effect for text
    const glitchChars = ['>', '_', '|', '/', '\\'];
    let glitchInterval: NodeJS.Timeout;
    
    const updateGlitch = () => {
      const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
      setGlitchText(randomChar);
    };
    
    glitchInterval = setInterval(updateGlitch, 100);
    
    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`matrix-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <MatrixBackground />
      <div className="matrix-overlay">
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="control red"></span>
            <span className="control yellow"></span>
            <span className="control green"></span>
          </div>
          <div className="terminal-title">SYSTEM://PORTFOLIO.EXE</div>
          <div className="glitch-cursor">{glitchText}</div>
        </div>
        
        <Navigation parentToChild={{ mode }} modeChange={() => setMode(mode === 'dark' ? 'light' : 'dark')} />
        
        <div className="matrix-content">
          <div className="terminal-prompt">
            <span className="prompt-user">user@matrix</span>
            <span className="prompt-symbol">:</span>
            <span className="prompt-path">~/portfolio</span>
            <span className="prompt-symbol">$</span>
            <span className="cursor-blink">▊</span>
          </div>
          
          <div className="matrix-section">
            <Main />
          </div>
          <div className="matrix-section">
            <Education />
          </div>
          <div className="matrix-section">
            <Certifications />
          </div>
          <div className="matrix-section">
            <Expertise />
          </div>
          <div className="matrix-section">
            <Timeline />
          </div>
          <div className="matrix-section">
            <Project />
          </div>
          <div className="matrix-section">
            <Contact />
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default MatrixApp;

