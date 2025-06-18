import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Education.scss";

function Education() {
    return (
        <div className="container" id="education">
            <div className="skills-container">
                <h1>Education</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faGraduationCap} size="3x" />
                        <h3>Master of Science in Big Data Analytics</h3>
                        <p><strong>Trent University, Canada</strong><br />
                        Graduation: June 2025</p>
                        <p>Focused on Data engineering, Cloud Platforms, Advanced Visualization Techniques.</p>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGraduationCap} size="3x" />
                        <h3>Bachelor of Technology in Electronics (IoT)</h3>
                        <p><strong>VIT University, India</strong><br />
                        Graduated: May 2021</p>
                        <p>Specialized in embedded systems, wireless networks, and Internet of Things protocols.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
