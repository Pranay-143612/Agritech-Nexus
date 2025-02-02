import React from 'react';
import './AboutUs.css'; // Import the styles
import mission from "./mission.jpg"
import vision from "./vision.webp"
import value from "./value.jpg"
import why from "./why.jpg"

function AboutUs() {
    return (
        <section className="about-container" id='about-container'>
            <h1>Inspired by You, Guided by Us</h1>
            <div className="cards-container">
                <div className="cards card-1">
                    <img src={mission} alt="Our Mission" />
                    <h2>Our Mission</h2>
                    <p>Query Box aims to provide a platform for users to ask questions, share answers, and collaborate on solving problems. It fosters a supportive community for learning and knowledge sharing in a simple, interactive environment.</p>
                </div>
                <div className="cards card-2">
                    <img src={vision} alt="Our Vision" />
                    <h2>Our Vision</h2>
                    <p>To be the go-to platform that fosters learning, collaboration, and problem-solving through a community-driven approach, empowering users worldwide to share knowledge and insights.</p>
                </div>
                <div className="cards card-3">
                    <img src={value} alt="Our Values" />
                    <h2>Our Values</h2>
                    <p>Collaboration, openness, and a commitment to continuous learning and innovation. We value user-centric solutions and strive for excellence in providing a platform that nurtures knowledge sharing and community growth.</p>
                </div>
                <div className="cards card-4">
                    <img src={why} alt="Why Us?" />
                    <h2>Why Us?</h2>
                    <p>Query Box stands out as a platform that prioritizes simplicity, accessibility, and reliability. Whether you're seeking answers or sharing expertise, we ensure a smooth and enriching experience for all users.</p>
                </div>
            </div>
        </section>

    );
}

export default AboutUs;
