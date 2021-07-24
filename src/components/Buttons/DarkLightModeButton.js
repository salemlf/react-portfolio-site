import React from "react";
import styled from "styled-components";
import SunIcon from "../../images/sun.svg";
import { Wrapper, Shadow, ButtonEdge, ButtonFront } from "./NavBarButton";

function tempAlert() {
  alert("That feature doesn't exist yet, sorry!");
}

const DarkLightWrapper = styled(Wrapper)`
  margin: 0 20px 0 10px;
`;

const DarkLightButtonEdge = styled(ButtonEdge)`
  background: linear-gradient(
    to left,
    hsl(50deg, 70%, 24%) 0%,
    hsl(50deg, 70%, 44%) 8%,
    hsl(50deg, 70%, 44%) 92%,
    hsl(50deg, 70%, 24%) 100%
  );
`;

const DarkLightButtonFront = styled(ButtonFront)`
  padding: calc(14px + (42 - 14) * ((100vw - 250px) / (1600 - 250)));
  font-size: calc(16px + (32 - 16) * ((100vw - 250px) / (1600 - 250)));
  font-weight: 400;
  background: hsl(50deg, 70%, 64%);
  background-image: url(${SunIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function DarkLightModeButton({ className }) {
  return (
    <DarkLightWrapper type="button" onClick={tempAlert} className={className}>
      <Shadow></Shadow>
      <DarkLightButtonEdge></DarkLightButtonEdge>
      <DarkLightButtonFront></DarkLightButtonFront>
    </DarkLightWrapper>
  );
}

export default DarkLightModeButton;
