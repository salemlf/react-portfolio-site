import styled from "styled-components";
import NavOptions from "../NavOptions";
import DarkLightModeButton from "../Buttons/DarkLightModeButton";
import ResumeButton from "../Buttons/ResumeButton";

export const Wrapper = styled.nav`
  background-color: #7c5a90;
  color: #f7eede;
  height: 62vmax;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 68vmin;
  max-width: 100%;
  text-align: center;
  z-index: 3;
  border-radius: 0px 0px 0px 10px;
  transition: all 300ms ease-in-out;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  right: ${({ isOpen }) => (isOpen ? "0" : "-75vw")};

  @media only screen and (min-width: 900px) {
    right: -75vw;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-content: space-around;
  min-height: 78px;
  height: 10vmin;
`;

export const GridNavOptions = styled(NavOptions)`
  grid-column-start: 1;
  grid-column-end: 4;
`;

export const GridDarkLightModeButton = styled(DarkLightModeButton)`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const GridResumeButton = styled(ResumeButton)`
  grid-column-start: 2;
  grid-column-end: 3;
`;
