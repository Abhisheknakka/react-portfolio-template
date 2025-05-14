import React from "react";
import "../assets/styles/Volunteer.scss";

const volunteerActivities = [
  {
    title: "Trekking in Banff",
    description: "Hiked Sulphur Mountain — snowy peaks and serene trails in Alberta.",
    image: "https://via.placeholder.com/300x200?text=Trekking"
  },
  {
    title: "Beach Cleanup Drive",
    description: "Led a Wasaga Beach cleanup with 30+ volunteers to promote eco-awareness.",
    image: "https://via.placeholder.com/300x200?text=Cleanup"
  },
  {
    title: "Art & Culture Workshop",
    description: "Organized mural painting for children at a community event.",
    image: "https://via.placeholder.com/300x200?text=Art+Workshop"
  },
  {
    title: "Youth Mentorship",
    description: "Guided high schoolers on career planning and study skills.",
    image: "https://via.placeholder.com/300x200?text=Mentorship"
  }
];

function VolunteerActivities() {
  return (
    <section id="volunteer">
      <div className="volunteer-container">
        <h1>Volunteer & Extracurricular Activities</h1>
        <div className="volunteer-grid">
          {volunteerActivities.map((activity, index) => (
            <div className="volunteer-card" key={index}>
              <div className="volunteer-image">
                <img src={activity.image} alt={activity.title} />
              </div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VolunteerActivities;
