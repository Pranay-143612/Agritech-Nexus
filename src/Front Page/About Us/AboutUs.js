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
                    <p>Agritech Nexus aims to provide a platform for farmers, consumers, and agricultural experts to ask questions, share answers, and collaborate on solving agricultural challenges. It fosters a supportive community for learning, knowledge sharing, and direct product sales in a simple, interactive environment.</p>
                </div>
                <div className="cards card-2">
                    <img src={vision} alt="Our Vision" />
                    <h2>Our Vision</h2>
                    <p>To be the go-to platform that fosters learning, collaboration, and problem-solving in the agriculture sector through a community-driven approach, empowering farmers, consumers, and experts worldwide to share knowledge, insights, and market opportunities.</p>
                </div>
                <div className="cards card-3">
                    <img src={value} alt="Our Values" />
                    <h2>Our Values</h2>
                    <p>Collaboration, transparency, and a commitment to continuous learning and agricultural innovation. We value farmer-centric solutions and strive for excellence in providing a platform that nurtures knowledge sharing, community growth, and sustainable farming practices.</p>
                </div>
                <div className="cards card-4">
                    <img src={why} alt="Why Us?" />
                    <h2>Why Us?</h2>
                    <p>Agritech Nexus stands out as a platform that prioritizes simplicity, accessibility, and reliability. Whether you're seeking answers or sharing expertise, we ensure a smooth and enriching experience for all users.</p>
                </div>
            </div>
        </section>

    );
}

export default AboutUs;
