import styled from "styled-components";

export const ContactWrapper = styled.div`
  padding-top: 4rem ;
  background-color: #151418;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  a {
      font-size: 1.4rem;
      color: #151418;
      transition: 0.2s ease-in;
      &:hover {
        color: #3DDC97;
      }
    }

  @media (min-width: 576px) {
    a {
      font-size: 1.8rem;
    }
  }
  @media (min-width: 992px) {
    flex-direction: row;
    
    a {
      margin-bottom: 0;
      font-size: 3rem;
    }
  }
`;
