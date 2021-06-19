import React from "react";
import styled from "styled-components";
import HeaderLink from "./HeaderLink";
import DarkLightModeButton from "./DarkLightModeButton";
import ResumeButton from "./ResumeButton";

const Wrapper = styled.nav`
  padding: 1.0625rem 1.5rem;
  background-color: var(--mediumBlue);
  color: var(--offWhite);
`;

const ButtonAndLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 901px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  margin-right: 10px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

const ResumeButtonDesktop = styled(ResumeButton)`
  width: 20vw;
`;

const HamburgerMenu = styled.div`
  display: none;
  width: 100px;
  height: 100px;

  @media only screen and (max-width: 900px) {
    display: inline-block;
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
const LogoText = styled.h2`
  font-size: 60px;
  line-height: 0.5;
`;

function Header() {
  return (
    <Wrapper>
      <ButtonAndLinkContainer>
        {/* TODO: create component for logo */}
        <a href="/" class="header__logo">
          {/* logo here, temporarily just text  */}
          {/* <h2 class="header__name-logo">SLF</h2> */}
          <LogoText>SLF</LogoText>
        </a>
        {/* <a
        href="#"
        id="hamburgerBtn"
        class="hamburger hamburger-btn header__menu hide-for-desktop"
      > */}
        {/* <span></span>
        <span></span>
        <span></span>
      </a> */}
        <LinkWrapper>
          <HeaderLink link="#" linkText="Home" />
          <HeaderLink link="#" linkText="About" />
          <HeaderLink link="#" linkText="Projects" />
          <HeaderLink link="#" linkText="Hobbies" />
          <HeaderLink link="#" linkText="Contact" />
        </LinkWrapper>
        <ButtonContainer>
          <DarkLightModeButton />
          <ResumeButtonDesktop />
        </ButtonContainer>
      </ButtonAndLinkContainer>
      {/* hamburger menu  */}
      <HamburgerMenu>
        <a
          href="#"
          id="hamburgerBtn"
          class="hamburger hamburger-btn header__menu hide-for-desktop"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </HamburgerMenu>
    </Wrapper>
  );
}

export default Header;
