import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsappSquare,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <a
              href="https://www.linkedin.com/in/hernan-diaz-daives/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/hernandiazz9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://github.com/hernandiazz9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/543518128742"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare />
            </a>
            <a
              href="mailto:hernandiazz99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiMail />
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
