import React from "react";
import styled from "styled-components";
import { NavLink } from "../Header/HeaderElements";
const FooterSection = styled.div`
  background-color: #151418;
  position: relative;
  span {
    position: absolute;
    bottom: 1rem;
    right: 3rem;
    color: #151418;
    a {
      text-decoration: underline;
    }
  }
  .link-footer {
    position: absolute;
    display: none;
  }
  @media (min-width: 576px) {
    .link-footer {
      display: block;
      bottom: 1.3rem;
      left: 4rem;
    }
    span {
      bottom: 2rem;
      right: 4rem;
    }
  }
  @media (min-width: 992px) {
    .link-footer {
      display: block;
      bottom: 4rem;
      left: 8rem;
    }
    span {
      bottom: 3rem;
      right: 4rem;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/hernandiazz9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hernandiazz9
          </a>{" "}
        </span>
        <div className="link-footer">
          <NavLink className="menu-item" to="projects" smooth={true}>
            &#x2022; Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            &#x2022; About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            &#x2022; Contact
          </NavLink>
        </div>
      </div>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#3DDC97"
          className="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(0 720 200)"
        ></path>
      </svg>
    </FooterSection>
  );
}

export default Footer;
