import React from "react";
import styled from "styled-components";
import NavOptions from "./NavOptions";
import DarkLightModeButton from "./DarkLightModeButton";
import ResumeButton from "./ResumeButton";

const Wrapper = styled.nav`
  background-color: #7c5a90;
  color: #f7eede;
  bottom: 10%;
  max-width: 750px;
  height: 82vh;
  overflow: auto;
  position: fixed;
  top: 0;
  /* TODO: uncomment when menu button has been added */
  /* right: -75vw; */
  width: 50vw;
  text-align: center;
  z-index: 1;
  border-radius: 0px 0px 0px 10px;
  transition: all 300ms ease-in-out;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 3fr;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-content: center;
`;

const GridNavOptions = styled(NavOptions)`
  grid-column-start: 1;
  grid-column-end: 4;
`;

const GridDarkLightModeButton = styled(DarkLightModeButton)`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const GridResumeButton = styled(ResumeButton)`
  grid-column-start: 2;
  grid-column-end: 3;
`;

function MobileMenu() {
  return (
    <Wrapper>
      <ButtonContainer>
        <GridDarkLightModeButton />
        <GridResumeButton />
      </ButtonContainer>
      <GridNavOptions></GridNavOptions>
    </Wrapper>
  );
}

export default MobileMenu;
