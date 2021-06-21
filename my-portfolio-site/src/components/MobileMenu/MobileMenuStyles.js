import styled from "styled-components";
import NavOptions from "../NavOptions";
import DarkLightModeButton from "../Buttons/DarkLightModeButton";
import ResumeButton from "../Buttons/ResumeButton";

// TODO: change right value based on show/hide prop
export const Wrapper = styled.nav`
  background-color: #7c5a90;
  color: #f7eede;
  bottom: 10%;
  max-width: 750px;
  height: 82vh;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 50vw;
  text-align: center;
  z-index: 3;
  border-radius: 0px 0px 0px 10px;
  transition: all 300ms ease-in-out;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 3fr;
  right: ${({ isOpen }) => (isOpen ? "0" : "-75vw")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  grid-column-start: 1;
  grid-column-end: 3;
  justify-content: center;
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

// export const WrapperVisbility = styled(Wrapper)``;
