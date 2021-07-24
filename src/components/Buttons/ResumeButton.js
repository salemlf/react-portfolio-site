import React from "react";
import styled from "styled-components";
import { Wrapper, Shadow, ButtonEdge, ButtonFront } from "./NavBarButton";

const ResumeButtonEdge = styled(ButtonEdge)`
  background: linear-gradient(
    to left,
    hsl(13deg, 48%, 28%) 0%,
    hsl(13deg, 48%, 65%) 8%,
    hsl(13deg, 48%, 65%) 92%,
    hsl(13deg, 48%, 28%) 100%
  );
`;

const ResumeButtonFront = styled(ButtonFront)`
  padding: calc(4px + (12 - 4) * ((100vw - 250px) / (1600 - 250)))
    calc(10px + (40 - 10) * ((100vw - 250px) / (1600 - 250)));
  font-size: calc(16px + (32 - 16) * ((100vw - 250px) / (1600 - 250)));
  background: hsl(13deg, 48%, 75%);
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
      <ResumeButtonEdge></ResumeButtonEdge>
      <ResumeButtonFront>
        <ButtonText>Resume</ButtonText>
      </ResumeButtonFront>
    </Wrapper>
  );
}

export default ResumeButton;
