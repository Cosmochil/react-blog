import styled from "styled-components";

export default styled.button`
  ${(props) =>
    props.buttonType === "primary"
      ? `border: 2px solid #60dbfb; border-radius: 15px; color: #fff; background: #282c34; &: hover {background: #60dbfb; color: #282c34;}`
      : `border: 2px solid #60dbfb; border-radius: 15px; color: #282c34; background: #60dbfb;`}
  font-size: 1rem;
  font-family: "ItimReg";
  padding: 7px 10px;
  &: hover {
    box-shadow: 0px 0px 12px rgba(96, 219, 251, 1);
    cursor: pointer;
  }
`;
