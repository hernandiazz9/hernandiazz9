import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import hero from '../../Assets/hero.png'
import scrollDownImg from '../../Assets/scroll-down.svg'
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Hernán</h1>
            <h5>Full Stack Developer</h5>
            <p>
            I develop full web applications, and I love what I do
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src={hero}
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src={scrollDownImg}
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
