import styled from "styled-components";

/* TODO: add min and max padding for different screen sizes */
export const Wrapper = styled.nav`
  background-color: var(--mediumBlue);
  color: var(--offWhite);
  position: relative;
  z-index: 2;
  width: 100%;

  @media only screen and (max-width: 900px) {
    z-index: auto;
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
    /* width: 100%; */
    height: 11vmin;
    min-height: 80px;
    max-height: 300px;
  }
`;

export const ButtonAndLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 901px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

// TODO: temporary, will change when logo is made
export const MobileLogoText = styled.a`
  display: none;
  @media only screen and (max-width: 900px) {
    display: inline-block;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  width: 100px;
  height: auto;

  @media only screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 4;
    margin-right: 3vw;
    justify-content: flex-end;
  }

  span {
    display: block;
    position: relative;
    width: calc(30px + (50 - 30) * ((100vw - 250px) / (900 - 250)));
    height: calc(2px + (3 - 2) * ((100vw - 250px) / (900 - 250)));
    background-color: var(--offWhite);
    transition: all 300ms ease-in-out;
    transform-origin: 1px 1px;

    &:not(:last-child) {
      margin-bottom: calc(7px + (14 - 7) * ((100vw - 250px) / (900 - 250)));
    }

    ${({ isX }) =>
      isX &&
      `
    &:first-child {
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  `}
  }
`;

export const HamburgerMenuLink = styled.a`
  display: inline-block;
  margin-left: 3vw;
`;

// TODO: temporary (will be image for logo), change
export const LogoText = styled.h2`
  font-size: calc(30px + (60 - 30) * ((100vw - 250px) / (900 - 250)));
  line-height: 0.5;
`;
