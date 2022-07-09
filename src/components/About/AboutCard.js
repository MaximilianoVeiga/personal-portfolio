import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello guys, I'm <span className="purple">Maximiliano Veiga</span> from 
            <span className="purple"> Rio Grande, Brazil</span>. 
            I am currently a <span className="purple">Senior Backend Developer</span>, 
            <span className="purple"> FullStack Developer</span> and a <span className="purple">Machine Learning Engineer</span>. 
            I've been studying since I was 16 and I have the motivation to improve every day with new practices 
            based on team development.<br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Competitive Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Study New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel and Discover New Things
            </li>
          </ul>

          <p style={{ color: "rgb(150 126 172)" }}>
            "Even if the world frustrates me, I can look up to the sky and feel peace as I contemplate the vastness of the universe."{" "}
          </p>
          <footer className="blockquote-footer">Maximiliano Veiga</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
