import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import '../assets/styles/Volunteer.scss';

function VolunteerActivities() {
  return (
    <section id="volunteer">
      <div className="volunteer-container">
        <h1>Volunteer & Extracurricular Activities</h1>
        <div className="volunteer-grid">
          {/* Volunteer Experience 1 */}
          <div className="volunteer-card">
            <div className="volunteer-icon">
              <FontAwesomeIcon icon={faHandsHelping} size="2x" />
            </div>
            <h3>Community Outreach</h3>
            <p>
              Coordinated local events and activities that foster community engagement.
            </p>
          </div>

          {/* Volunteer Experience 2 */}
          <div className="volunteer-card">
            <div className="volunteer-icon">
              <FontAwesomeIcon icon={faHandsHelping} size="2x" />
            </div>
            <h3>Environmental Cleanup</h3>
            <p>
              Organized neighborhood cleanups and green initiatives to promote sustainability.
            </p>
          </div>

          {/* Volunteer Experience 3 */}
          <div className="volunteer-card">
            <div className="volunteer-icon">
              <FontAwesomeIcon icon={faHandsHelping} size="2x" />
            </div>
            <h3>Youth Mentoring</h3>
            <p>
              Mentored high school students on career planning and personal development.
            </p>
          </div>

          {/* Volunteer Experience 4 */}
          <div className="volunteer-card">
            <div className="volunteer-icon">
              <FontAwesomeIcon icon={faHandsHelping} size="2x" />
            </div>
            <h3>Art & Culture Programs</h3>
            <p>
              Assisted in organizing cultural events and workshops in local community centers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerActivities;
