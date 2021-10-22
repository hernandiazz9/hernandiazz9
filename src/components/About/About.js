import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          {/* <Image
            src="https://gurupawar.github.io/portfolio/assets/man-svgrepo-com.svg"
            alt="man-svgrepo"
          /> */}

          <div className="AboutBio">
            <strong>Hello! </strong>My name is <strong> Hernán Díaz Daives </strong> and I enjoy creating powerful web applications that live on the Internet. <br/>
             My interest in software development started back in 2009 when I was studying
            Electronics and developing microchip software. After that I took
            several web development courses and a full stack bootcamp that
            thanks to that I have become a great developer of complete web applications.
          </div>
          <div className="AboutBio tagline2"> Today, I am looking for a job that allows me to continue growing personally and professionally </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
