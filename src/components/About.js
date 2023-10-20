import React from "react";
import { Outlet } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="aboutparent" id="hero">
      <div className="about">
        <div className="textom">
          <h1>About me</h1>
          <p>
            From years in bureaucracy to the dynamic world of web development,
            my journey has been anything but ordinary. Inspired by a passion for
            challenges, I transitioned from a longstanding career in public
            administration to study at IT-Högskolan in Gothenburg.
          </p>
          <br />
          <p>
            While I thrive on diving deep into new tools and technologies, my
            interests are vast – from football to making wood-fire pizza and
            intriguing quizzes. As someone who believes in constant growth and
            exploration, every day presents a new opportunity to learn and
            excel. And while I’m still on my path to mastering the tech realm,
            I'm driven, dedicated, and eager for what the future holds.
          </p>

          <br />
          <p>
            The journey has just begun, but what an exciting journey it promises
            to be!
          </p>

          <br />

          <p>
            See for yourself what I've accomplished so far and stay tuned for
            what's coming next!
          </p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default About;
