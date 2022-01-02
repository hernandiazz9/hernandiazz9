
import { FiChevronRight } from "react-icons/fi";

import styled, {keyframes} from "styled-components";

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-20px);
  }
  60% {
    transform: translateX(-10px);
  }
`;
const RightArrow = styled.div`
  position: absolute;
  left: 50vw;
  top: 35%;
  font-size: 300px;
  animation: ${ScrollAnimation} 2s linear 0s infinite;
  cursor: pointer;
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
    left: 60vw;
    font-size: 130px;
  }
`;

const SliderArrowsRigth = (props) => {
  const { onClick } = props;
  return (
    <RightArrow onClick={onClick}>
      <FiChevronRight />
    </RightArrow>
  );
};

export default SliderArrowsRigth;
