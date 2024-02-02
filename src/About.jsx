import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faExchangeAlt, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import "./styles/About.css";

const About = () => {
  return (
    <section id="about-section">
      <div className="about-item">
        <FontAwesomeIcon icon={faCheck} className="icon" />
        <p>Flexible rentals</p>
      </div>

      <div className="about-item">
        <FontAwesomeIcon icon={faExchangeAlt} className="icon" />
        <p>Cancel or change most bookings for free up to 48 hours before pick-up</p>
      </div>

      <div className="about-item">
        <FontAwesomeIcon icon={faTimes} className="icon" />
        <p>No hidden fees</p>
      </div>

      <div className="about-item">
        <FontAwesomeIcon icon={faDollarSign} className="icon" />
        <p>Know exactly what you’re paying, Price Match Guarantee</p>
      </div>
    </section>
  );
}

export default About;
