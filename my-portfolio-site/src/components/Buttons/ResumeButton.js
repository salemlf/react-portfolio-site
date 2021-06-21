import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  border-radius: 5px;
  font-size: 1.1rem;
  width: 15vw;
  height: 10vw;
  max-width: 155px;
  max-height: 70px;
  min-width: 115px;
  min-height: 50px;
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
  line-height: 1.3;
  font-size: var(--font-lrg);
`;

function ResumeButton({ className }) {
  return (
    <Wrapper className={className}>
      <ButtonText>Resume</ButtonText>
    </Wrapper>
  );
}

export default ResumeButton;
