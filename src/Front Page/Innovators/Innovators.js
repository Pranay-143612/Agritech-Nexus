import React from 'react';
import './Innovators.css'; // Create this CSS file for styling
import sanjay from './sanjay.jpg';
import pranay from './pranay.jpeg';
import akarsh from './akarsh.jpg';

const Innovators = () => {
  const team = [
    { name: 'B. Sanjay', role: 'Lead', image: sanjay },
    { name: 'D. Pranay Acharya', role: 'Developer', image: pranay },
    { name: 'B. Akarsh', role: 'Content', image: akarsh },
  ];

  const reviews = [
    {
      reviewer: "Ramesh Kumar",
      review: "Agritech Nexus is a game-changer for farmers. The platform is easy to use and highly informative!",
      rating: 5,
    },
    {
      reviewer: "Sushma Patel",
      review: "I love how this platform connects farmers and experts. A brilliant initiative!",
      rating: 4,
    },
    {
      reviewer: "Arvind Singh",
      review: "Great community and resources. It's helped me improve my farming techniques significantly.",
      rating: 5,
    },
    {
      reviewer: "Priya Sharma",
      review: "A must-have tool for farmers and agricultural enthusiasts. Highly recommended!",
      rating: 4,
    },
    {
      reviewer: "Rahul Mehta",
      review: "The user experience is fantastic, and the knowledge sharing is unmatched.",
      rating: 5,
    },
    {
      reviewer: "Devupalli Jayanth",
      review: "Agritech Nexus truly stands out as an innovative platform.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          ★
        </span>
      ));
  };

  return (
    <section>
      <div id="innovators" className="innovators-section">
        <h2>Meet the Innovators</h2>
        <div className="team-container">
          {team.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="reviews" className="reviews-section">
        <h2>Reviews & Ratings</h2>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <h3>{review.reviewer}</h3>
              <p className="review-text">"{review.review}"</p>
              <div className="stars-container">{renderStars(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovators;
