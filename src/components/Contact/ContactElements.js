import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  a {
      font-size: .75rem;
      color: #151418;
      transition: 0.2s ease-in;
      &:hover {
        color: rgb(57, 134, 250);
      }
    }

  @media (min-width: 576px) {
    a {
      font-size: 1.5rem;
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
