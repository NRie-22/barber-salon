import styled from "styled-components";
import * as variables from "../../../styles/variables";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export const Container = styled.div`
  width: 90%;

  margin-top: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  @media (max-width: 640px) {
    width: 500px;
  }

  @media (max-width: 595px) {
    width: 100%;
  }
`;

export const LeftArrow = styled(BsFillArrowLeftCircleFill)`
  font-size: 2rem;
  color: ${variables.WHITE};

  position: absolute;
  left: -20px;

  cursor: pointer;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const RightArrow = styled(BsFillArrowRightCircleFill)`
  font-size: 2rem;
  color: ${variables.WHITE};

  position: absolute;
  right: -20px;

  cursor: pointer;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const ScrollableDiv = styled.div`
  width: 90%;
  height: 100%;

  display: flex;
  align-items: center;
  overflow: hidden;

  .inside-scroll {
    width: 100%;
    height: 100%;

    display: flex;

    gap: 20px;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const Timetable = styled.p`
  width: 70px;

  font-family: "Montserrat";
  font-size: 1.075rem;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;

  padding: 12px 10px;

  border-radius: 5px;
  border: 2px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 424px) {
    font-size: 0.9rem;

    padding: 10px 3px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 40px;

  @media (max-width: 640px) {
    width: 90%;
  }

  @media (max-width: 424px) {
    width: 80%;
  }
`;

export const Price = styled.p`
  font-family: "Teko";
  font-size: 1.888rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${variables.WHITE};

  @media (max-width: 640px) {
    font-size: 1.188rem;
  }

  @media (max-width: 424px) {
    font-size: 1.288rem;
  }

  @media (max-width: 340px) {
    font-size: 1.188rem;
  }
`;

export const Duration = styled.p`
  font-family: "Montserrat";
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.167em;
  letter-spacing: 0;
  color: ${variables.LIGHT_GREY};

  @media (max-width: 640px) {
    font-size: 0.825rem;
  }

  @media (max-width: 340px) {
    font-size: 0.725rem;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat";
  font-size: 1.275rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  color: ${variables.WHITE};

  padding: 23px 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 4px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 640px) {
    font-size: 0.725rem;
    padding: 17px 12%;
  }

  @media (max-width: 340px) {
    font-size: 0.625rem;
  }
`;
