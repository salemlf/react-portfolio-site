import React from "react";
import HeaderLink from "./HeaderLink";
import DarkLightModeButton from "../Buttons/DarkLightModeButton";

import {
  Wrapper,
  ButtonAndLinkContainer,
  ButtonContainer,
  LinkWrapper,
  ResumeButtonDesktop,
  HamburgerMenu,
  MobileLogoText,
  LogoText,
  HamburgerMenuLink
} from "./HeaderStyles.js";

// TODO: change anchor tag and spans to styled component
// TODO: testing, keep squiggle under selected nav link
// TODO: turn hamburger menu button into "X" if isOpen
// TODO: hide mobile menu sidebar if max-width is exceeded

const Header = ({ toggle }) => {
  return (
    <Wrapper>
      <ButtonAndLinkContainer>
        <a href="/" className="header__logo">
          <LogoText>SLF</LogoText>
        </a>
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
      <MobileLogoText>
        <LogoText>SLF</LogoText>
      </MobileLogoText>
      <HamburgerMenu onClick={toggle}>
        <HamburgerMenuLink href="#"
          id="hamburgerBtn"
          className="hamburger hamburger-btn header__menu hide-for-desktop">
          <span />
          <span />
          <span />
        </HamburgerMenuLink>
      </HamburgerMenu>
    </Wrapper>
  );
};

export default Header;
