import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0 50px 0;

  background-color: ${variables.DARK_GREY};
`;

export const Message = styled.p`
  font-family: "Montserrat";
  font-size: 1.575rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-align: center;
  color: ${variables.WHITE};

  margin-top: ${(props) => (props.marginTop ? props.marginTop : "50px")};

  @media (max-width: 850px) {
    font-size: 1.275rem;
  }

  @media (max-width: 660px) {
    font-size: 1.225rem;
  }

  @media (max-width: 424px) {
    font-size: 1.075rem;
  }
`;

export const Services = styled.div`
  width: 1170px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;

  padding-top: 80px;

  @media (max-width: 1270px) {
    width: 94%;
  }

  @media (max-width: 1023px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 1023px) {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 750px) {
    padding-top: 42px;

    grid-template-columns: 1fr;
  }
`;

export const Service = styled.div`
  width: 100%;

  padding: 30px 25px 15px 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  background-color: ${variables.LESS_DARK_GREY};

  position: relative;
`;

export const Summary = styled.p`
  font-family: "Montserrat";
  font-size: 1.275rem;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: 0.7px;
  text-align: center;
  color: ${variables.DARK_YELLOW};

  margin-bottom: 15px;

  :last-of-type {
    color: ${variables.WHITE};
    margin-bottom: 0;
  }

  @media (max-width: 1160px) {
    font-size: 1.075rem;
  }

  @media (max-width: 1023px) {
    font-size: 0.975rem;
  }

  @media (max-width: 950px) {
    font-size: 0.875rem;
  }
`;

export const CancelButton = styled.div`
  font-family: "Montserrat";
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.7px;
  color: #ff5a5a;

  align-self: flex-end;

  background-color: rgba(0, 0, 0, 0.2);

  margin-top: 25px;

  box-sizing: border-box;
  padding: 8px 8px;

  border-radius: 4px;

  cursor: pointer;

  @media (max-width: 1160px) {
    padding: 6px 8px;
  }

  @media (max-width: 1023px) {
    padding: 5px 8px;
  }

  @media (max-width: 950px) {
    padding: 4px 8px;
  }
`;

export const Button = styled.button`
  width: 260px;
  height: 70px;

  font-family: "Montserrat";
  font-size: 0.875rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50px;

  border-radius: 4px;
  border: 5px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  .whats-icon {
    font-size: 1.875rem;

    margin-left: 10px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 50px;

    font-size: 0.775rem;

    .whats-icon {
      font-size: 1.475rem;
    }
  }
`;
