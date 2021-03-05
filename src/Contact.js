import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div className="contacts">
      <h3>Contact me here!</h3>
      <div className="links">
        <a href="https://github.com/DohnalMichal" target="_blank" rel="noopener">
          <i aria-hidden="true">
            <AiFillGithub className="icon" color="white" alt="Github Icon" />
          </i>
          <span className="visually-hidden">Github</span>
        </a>
        <a href="https://www.linkedin.com/in/michal-dohnal-b496b7188/" target="_blank" rel="noopener">
          <i aria-hidden="true">
            <AiFillLinkedin className="icon" color="white" alt="LinkedIn Icon" />
          </i>
          <span className="visually-hidden">LinkedIn</span>
        </a>
        <a href="https://www.linkedin.com/in/michal-dohnal-b496b7188/" target="_blank" rel="noopener">
          <i aria-hidden="true">
            <AiOutlineInstagram className="icon" color="white" alt="Instagram Icon" />
          </i>
          <span className="visually-hidden">Instagram</span>
        </a>
      </div>
    </div>
  )
}

export default Contact;
