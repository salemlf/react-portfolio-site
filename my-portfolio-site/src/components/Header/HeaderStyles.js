import styled from "styled-components";
// import styled from "styled-components/macro";
import ResumeButton from "../Buttons/ResumeButton";

export const Wrapper = styled.nav`
  padding: 1.0625rem 1.5rem;
  background-color: var(--mediumBlue);
  color: var(--offWhite);

  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: end;
  }
`;

export const ButtonAndLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 901px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  margin-right: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

export const ResumeButtonDesktop = styled(ResumeButton)`
  width: 20vw;
`;

export const HamburgerMenu = styled.div`
  display: none;
  width: 100px;
  height: 100px;

  @media only screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 4;
  }

  span {
    display: block;
    position: relative;
    width: 50px;
    height: 3px;
    background-color: var(--offWhite);

    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
`;

// TODO: temporary (will be image for logo), change
export const LogoText = styled.h2`
  font-size: 60px;
  line-height: 0.5;
`;
