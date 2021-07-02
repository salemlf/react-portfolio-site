import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 5px;
  font-size: calc(12px + (30 - 12) * ((100vw - 250px) / (1600 - 250)));
  padding: calc(4px + (12 - 4) * ((100vw - 250px) / (1600 - 250)))
    calc(10px + (40 - 10) * ((100vw - 250px) / (1600 - 250)));
  box-shadow: inset 2px 5px 8px rgba(0, 0, 0, 0.25);
  box-shadow: 10px 10px rgba(0, 0, 0, 0.1);
  border: 0;
  color: white;
  font-weight: 400;
  cursor: pointer;
  background: #deaea1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  opacity: 1;
  :hover {
    opacity: 0.75;
  }
`;

const ButtonText = styled.p`
  font-family: "Oswald", sans-serif;
  line-height: 0;
`;

function ResumeButton({ className }) {
  return (
    <Wrapper className={className}>
      <ButtonText>Resume</ButtonText>
    </Wrapper>
  );
}

export default ResumeButton;
