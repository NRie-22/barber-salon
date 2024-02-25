import styled from "styled-components";
import * as variables from "../../styles/variables";

export const Title = styled.p`
  font-family: "Teko";
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1em;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: ${variables.DARK_YELLOW};

  @media (max-width: 424px) {
    font-size: 1.9rem;
  }
`;

export const Description = styled.p`
  font-family: "Montserrat";
  font-size: 0.855rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.7px;
  text-align: center;
  color: ${variables.WHITE};

  margin-top: 15px;
`;

export const InputsForm = styled.form`
  width: 100%;

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    all: unset;

    width: 100%;
    height: 55px;

    font-family: "Montserrat";
    font-size: 0.855rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: 0.7px;
    color: ${variables.WHITE};

    box-sizing: border-box;
    padding: 0 25px;

    margin-bottom: 13px;

    border-radius: 4px;
    border: 5px solid ${variables.MEDIUM_GREY};

    ::placeholder {
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  span {
    width: 100%;
  }

  @media (max-width: 494px) {
    margin-top: 15px;
  }

  @media (max-width: 424px) {
    input {
      font-size: 0.755rem;
    }
  }
`;

export const LinkButtonDiv = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 12px;

  position: relative;
`;

export const NavigationText = styled.div`
  font-family: "Montserrat";
  font-size: 0.905rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: ${variables.DARK_YELLOW};

  margin-top: 22px;

  cursor: pointer;

  :hover {
    color: ${variables.WHITE};
  }

  @media (max-width: 424px) {
    font-size: 0.855rem;

    margin-top: 18px;
  }

  @media (max-width: 370px) {
    font-size: 0.695rem;
  }
`;

export const ForgotPassword = styled.p`
  font-family: "Montserrat";
  font-size: 0.82rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.15px;
  text-decoration-line: underline;
  color: ${variables.DARK_YELLOW};

  position: absolute;
  top: -18px;

  cursor: pointer;

  :hover {
    color: ${variables.WHITE};
  }

  @media (max-width: 424px) {
    font-size: 0.77rem;
  }

  @media (max-width: 370px) {
    font-size: 0.62rem;
  }
`;

export const Button = styled.button`
  font-family: "Montserrat";
  font-size: 0.835rem;
  font-weight: 800;
  line-height: 1em;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: ${variables.WHITE};

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 23px;

  border-radius: 4px;
  border: 5px solid ${variables.DARK_YELLOW};

  cursor: pointer;

  :hover {
    transition: 0.3s ease-out;
    background-color: ${variables.DARK_YELLOW};
  }

  @media (max-width: 494px) {
    font-size: 0.735rem;
  }

  @media (max-width: 424px) {
    padding: 10px 20px;
  }

  @media (max-width: 370px) {
    font-size: 0.635rem;
    padding: 10px 20px;
  }
`;

export const Spacer = styled.div`
  width: 99%;

  font-family: "Montserrat";
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15px;
  color: ${variables.WHITE};

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 15px;

  div {
    width: 44%;
    height: 3px;

    background-color: ${variables.MEDIUM_GREY};

    border-radius: 4px;
  }

  @media (max-width: 494px) {
    margin-top: 15px;
  }
`;

export const GoogleLogin = styled.button`
  width: 100%;

  font-family: "Montserrat";
  font-size: 0.735rem;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;

  background: #dd4b39;

  margin-top: 15px;

  box-sizing: border-box;
  padding: 0 15px 0 auto;

  border: none;
  border-radius: 4px;

  position: relative;

  cursor: pointer;

  :before {
    content: "";

    width: 40px;
    height: 100%;

    box-sizing: border-box;

    border-right: #bb3f30 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
      7px 9px no-repeat;

    position: absolute;
    top: 0;
    left: 0;
  }

  :hover,
  :focus {
    background: #e74b37;
  }

  :active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
`;

export const FacebookLogin = styled.div`
  width: 100%;

  font-family: "Montserrat";
  font-size: 0.735rem;
  font-weight: 800;
  line-height: 40px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
  text-shadow: 0 -1px 0 #354c8c;

  background: #4c69ba;
  background-image: linear-gradient(#4c69ba, #3b55a0);

  margin-top: 15px;

  box-sizing: border-box;
  padding: 0 15px 0 auto;

  border: none;
  border-radius: 4px;

  position: relative;

  cursor: pointer;

  :before {
    content: "";

    width: 40px;
    height: 100%;

    box-sizing: border-box;

    border-right: #364e92 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png")
      7px 9px no-repeat;

    position: absolute;
    top: 0;
    left: 0;
  }
  :hover,
  :focus {
    outline: none;
    background-color: #5b7bd5;
    background-image: linear-gradient(#5b7bd5, #4864b1);
  }

  :active {
    box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);
  }
`;

export const modalStyles = {
  content: {
    maxWidth: "520px",
    padding: "35px 30px",
  },
};
