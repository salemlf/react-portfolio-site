import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: filter 600ms;

  &:hover {
    transition: filter 250ms;
    filter: brightness(110%);
  }
`;

const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsl(0deg 0% 0% / 0.25);
  border-radius: 4px;
  transform: translateY(6px);
  filter: blur(4px);

  ${Wrapper}:hover &, ${Wrapper}:active & {
    transform: translateY(10px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
`;

const ButtonEdge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(
    to left,
    hsl(13deg, 48%, 28%) 0%,
    hsl(13deg, 48%, 65%) 8%,
    hsl(13deg, 48%, 65%) 92%,
    hsl(13deg, 48%, 28%) 100%
  );
`;

const ButtonFront = styled.span`
  padding: calc(4px + (12 - 4) * ((100vw - 250px) / (1600 - 250)))
    calc(10px + (40 - 10) * ((100vw - 250px) / (1600 - 250)));
  font-size: calc(12px + (30 - 12) * ((100vw - 250px) / (1600 - 250)));
  display: block;
  border-radius: 4px;
  background: hsl(13deg, 48%, 75%);
  color: white;
  will-change: transform;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  transform: translateY(-6px);

  ${Wrapper}:hover &, ${Wrapper}:active & {
    transform: translateY(-8px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Wrapper}:focus & {
    transform: translateY(-4px);
    transition: transform 34ms;
  }
`;

function goToResume() {
  return window.open(
    "https://docs.google.com/document/d/1ADGAB1CyNihrYlkf4GueWgctCPbmrtBw79bp4gr-AGE/edit?usp=sharing",
    "_blank"
  );
}

const ButtonText = styled.p`
  font-family: "Oswald", sans-serif;
  line-height: 0;
`;

function ResumeButton({ className }) {
  return (
    <Wrapper type="button" onClick={goToResume} className={className}>
      <Shadow></Shadow>
      <ButtonEdge></ButtonEdge>
      <ButtonFront>
        <ButtonText>Resume</ButtonText>
      </ButtonFront>
    </Wrapper>
  );
}

export default ResumeButton;
