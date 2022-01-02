import { BiChevronRight } from "react-icons/bi";
import styled from "styled-components";

const RightArrow = styled.div`
  position: absolute;
  left: 50vw;
  top: 35%;
  font-size: 300px;

  cursor:pointer;
  @media (max-width: 1700px) {
    left: 60vw;
    font-size: 300px;
  }
  @media (max-width: 1300px) {
    left: 69vw;
    font-size: 250px;
  }
  @media (max-width: 998px) {
    left: 65vw;
    font-size: 200px;
  }
  @media (max-width: 788px) {
    left: 68vw;
    font-size: 100px;
  }
`;

const SliderArrowsRigth = (props) => {
  const { onClick } = props;
  return (
    <RightArrow onClick={onClick}>
      <BiChevronRight />
    </RightArrow>
  );
};

export default SliderArrowsRigth;
