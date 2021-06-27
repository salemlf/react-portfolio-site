import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 5px;
  font-size: calc(12px + (40 - 12) * ((100vw - 250px) / (1600 - 250)));
  width: 20vw;
  height: 10vw;
  max-width: 130px;
  max-height: 60px;
  min-width: 65px;
  min-height: 30px;
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
  line-height: 1;
`;

function ResumeButton({ className }) {
  return (
    <Wrapper className={className}>
      <ButtonText>Resume</ButtonText>
    </Wrapper>
  );
}

export default ResumeButton;
