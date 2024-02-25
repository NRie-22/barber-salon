import styled from "styled-components";
import * as variables from "../../styles/variables";

export const ModalHeader = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  align-self: flex-start;

  margin-bottom: 30px;
`;

export const Title = styled.p`
  font-family: "Teko";
  font-size: 1.888rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${variables.WHITE};
`;

export const AddCancelServices = styled.div`
  width: 100%;
  height: 55px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 35px;

  @media (max-width: 372px) {
    gap: 15px;
  }
`;

export const DateStatus = styled.div`
  font-family: "Montserrat";
  font-size: 1.275rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-align: center;
  color: ${variables.WHITE};

  margin-top: 35px;

  @media (max-width: 640px) {
    font-size: 1.075rem;
  }
`;

export const Button = styled.button`
  width: 46%;
  height: 100%;

  font-family: "Montserrat";
  font-size: 0.9rem;
  font-weight: 800;
  line-height: 1em;
  text-align: center;
  letter-spacing: 0.4px;
  color: ${variables.WHITE};

  border-radius: 4px;

  :first-of-type {
    border: 4px solid ${variables.LIGHT_BLUE};

    :hover {
      transition: 0.3s ease-out;
      background-color: ${variables.LIGHT_BLUE};
    }
  }

  :last-of-type {
    border: 4px solid ${variables.LIGHT_BLUE};

    :hover {
      transition: 0.3s ease-out;
      background-color: ${variables.LIGHT_BLUE};
    }
  }

  cursor: pointer;

  @media (max-width: 340px) {
    font-size: 0.8rem;
  }
`;

export const modalStyles = {
  content: {
    maxWidth: "650px",
    padding: "20px 35px 30px 35px",
  },
};
