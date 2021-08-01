import styled from "styled-components";

export default styled.button`
    ${(props) =>
      props.buttonType === "primary"
        ? `border: 2px solid #ffcad4; border-radius: 15px; color: #333; background: #ffcad4;`
        : `border: 2px solid #f1356d; border-radius: 15px; color: #333; background: #f1356d;`}
    font-size: 1rem;
    font-family: monospace;
  `;
