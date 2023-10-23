import React, { useState, useEffect } from "react";
import "./Main.css";
import Particles from "./Particles";

function LandingPage() {
  const [text, setText] = useState("");
  const rolling = [
    "Frontend enthusiast",
    "Tech explorer",
    "Love to learn",
    "Teamplayer",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(rolling[index]);
      index = (index + 1) % rolling.length;
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="about-container" id="home">
      <div>
        <h1 className="about-title">
          Hi, there!
          <br />
          I'm Ayanle Ahmed
        </h1>

        <p className="about-highlight-text">{text}</p>
      </div>
      <div>
        <img
          src="./images/ayanle-profil2.jpg"
          alt="Profile"
          className="about-profile-pic"
        />
      </div>
      {/* <p className="connect">Let's Connect</p> */}
      <Particles />
    </div>
  );
}

export default LandingPage;
