import React from "react";
import "../assets/styles/Volunteer.scss";

const interests = [
  {
    title: "Hiking & Trekking",
    description: "Passionate about exploring nature trails and mountain peaks. Regular hiker enjoying the serenity and challenge of outdoor adventures.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
  },
  {
    title: "Cricket",
    description: "Avid cricket enthusiast and player. Enjoy both playing and following international cricket matches, combining strategy with athleticism.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop"
  },
  {
    title: "Chess",
    description: "Strategic chess player who enjoys the mental challenge and critical thinking involved in every game. Regular participant in online chess communities.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop"
  },
  {
    title: "Meditation & Yoga",
    description: "Practice meditation and yoga regularly to maintain mental clarity, physical wellness, and inner balance in daily life.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
  },
  {
    title: "Art of Living Canada",
    description: "Active volunteer at Art of Living Canada, contributing to community wellness programs and helping organize meditation and stress-relief workshops.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
  }
];

function VolunteerActivities() {
  return (
    <section id="volunteer">
      <div className="volunteer-container">
        <h1>Interests & Activities</h1>
        <div className="volunteer-grid">
          {interests.map((activity, index) => (
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
