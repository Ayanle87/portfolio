import React, { useRef, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Contact.css";

import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const allFieldsFilled = name && email && message;

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // setIsLoading(true);

    if (!name || !email || !message) {
      setFormMessage("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_opp24jw",
        "template_ovse997",
        formRef.current,
        "ERE8qZYJgYrBY-XVC"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsEmailSent(true);
          // setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("message sent failed");
          // setIsLoading(false);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="write-h1">Write me a message</h1>
      <div className="form-parent">
        <div className="links-column">
          <a
            href="https://github.com/Ayanle87"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <img src="./images/github-mark.png" alt="img of github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/ayanle11/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <img src="./images/linkedin.png" alt="img of Linkedin logo" />
          </a>
          <a
            href="mailto:ayanle.ahmed@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </a>
          {/* <a href="#" className="link-item">
            <FontAwesomeIcon icon={faDownload} size="2xl" />
          </a> */}
        </div>
        <div className="form">
          <form ref={formRef} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="user_name"
              placeholder="Your name"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {isEmailSent ? <span>Thank you for your message!</span> : null}
            <input
              id="submitmessage"
              type="submit"
              value="Send message"
              disabled={!allFieldsFilled}
            />
            {formMessage && <p className="form-message">{formMessage}</p>}
          </form>
        </div>

        <img
          src="./images/brev.jpg"
          alt="image for contact me"
          className="contact-img"
        />
      </div>
      <ScrollToTop smooth />
    </div>
  );
}

export default Contact;
