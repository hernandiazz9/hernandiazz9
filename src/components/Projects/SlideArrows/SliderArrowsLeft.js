import { BiChevronLeft } from "react-icons/bi";
import styled from "styled-components";

const LeftArrow = styled.div`
  position: absolute;
  right: 50vw;
  top: 35%;
  font-size: 300px;
  z-index:99;
  display:none;
  cursor:pointer;
  @media (max-width: 1700px) {
    right: 60vw;
    font-size: 300px;
  }
  @media (max-width: 1300px) {
    right: 69vw;
    font-size: 250px;
  }
  @media (max-width: 998px) {
    right: 65vw;
    font-size: 200px;
  }
  @media (max-width: 788px) {
    right: 68vw;
    font-size: 100px;
  }
`;

const SliderArrowsLeft = (props) => {
  const { onClick } = props;
  return (
    <LeftArrow onClick={onClick}>
      <BiChevronLeft />
    </LeftArrow>
  );
};

export default SliderArrowsLeft;
