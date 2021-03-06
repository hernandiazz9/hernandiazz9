import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectList, ProjectList2 } from "../../data/ProjectData";
import Slider from "react-slick";
import SliderArrowsRight from "./SlideArrows/SliderArrowsRight";
import SliderArrowsLeft from "./SlideArrows/SliderArrowsLeft";

function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrowsRight />,
    prevArrow: <SliderArrowsLeft />,
  };
  return (
    <div style={{ background: "#3DDC97", paddingBottom: "2rem" }}>
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
          fill="#151418ff"
          className="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div style={{ color: "black" }} className="SectionTitle">
            Projects
          </div>
          <Slider {...settings}>
            <div>
              <ProjectCard ProjectList={ProjectList} />
            </div>
            <div>
              <ProjectCard ProjectList={ProjectList2} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Projects;
