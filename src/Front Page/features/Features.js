import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faFilter, faHandsClapping, faHandsHoldingChild, faPenNib, faReply } from "@fortawesome/free-solid-svg-icons";

function Features() {
    return (
        <section className="features-section">
            <h1>Key Features of Agritech Nexus</h1>
            <p className="para">With features built to enhance interaction and simplify information sharing, Agritech Nexus ensures a dynamic and engaging experience for both users and contributors alike. Here are some of the key features of our Agritech Nexus👇</p>
            <div className="features">
                <ul className="features-list">
                    <li className="features-list-item">
                        <div className="features-icon-wrapper">
                            <FontAwesomeIcon icon={faHandsHoldingChild} className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h4 className="features-item-heading" style={{color:"rgb(230, 20, 230)"}}>User Authentication</h4>
                            <p className="features-item-description">Secure login and profile management for users.</p>
                        </div>
                    </li>
                    <li className="features-list-item">
                        <div className="features-icon-wrapper">
                            <FontAwesomeIcon icon={faPenNib} className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h4 className="features-item-heading" style={{color:"#9219e2"}}>Query Posting and Categorization</h4>
                            <p className="features-item-description">Organized system for posting queries with categories and tags.</p>
                        </div>
                    </li>
                    <li className="features-list-item">
                        <div className="features-icon-wrapper">
                            <FontAwesomeIcon icon={faReply} className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h4 className="features-item-heading" style={{color:"rgb(38, 232, 17)"}}>Interactive Reply System</h4>
                            <p className="features-item-description">Engage with threaded replies for better collaboration.</p>
                        </div>
                    </li>
                </ul>
                <ul className="features-list">
                    <li className="features-list-item">
                        <div className="features-icon-wrapper">
                            <FontAwesomeIcon icon={faHandsClapping} className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h4 className="features-item-heading" style={{color:"#f5820f"}}>Voting and Reputation System</h4>
                            <p className="features-item-description">Reward active participants with votes and reputation points.</p>
                        </div>
                    </li>
                    <li className="features-list-item">
                        <div className="features-icon-wrapper">
                            <FontAwesomeIcon icon={faFilter} className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h4 className="features-item-heading" style={{color:"#e9c80b"}}>Search and Filter</h4>
                            <p className="features-item-description">Find queries with ease using advanced search and filter options.</p>
                        </div>
                    </li>
                    <li className="features-list-item">
                        <div className="features-icon-wrapper">
                            <FontAwesomeIcon icon={faBell} className="features-icon" />
                        </div>
                        <div className="features-text">
                            <h4 className="features-item-heading" style={{color:"#0bcbe9"}}>Notifications</h4>
                            <p className="features-item-description">Stay updated with real-time alerts and activity tracking.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Features;
