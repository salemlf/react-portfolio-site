import React, { useState } from "react";
import HeaderLink from "./HeaderLink";
import DarkLightModeButton from "../Buttons/DarkLightModeButton";
import ResumeButton from "../Buttons/ResumeButton";

import {
  Wrapper,
  ButtonAndLinkContainer,
  ButtonContainer,
  LinkWrapper,
  HamburgerMenu,
  MobileLogoText,
  LogoText,
  HamburgerMenuLink,
} from "./HeaderStyles.js";

// TODO: change spans to styled component
// TODO: testing, keep squiggle under selected nav link

const Header = ({ toggle }) => {
  const [isX, setIsX] = useState(false);

  const transformHamburger = () => {
    setIsX(!isX);
  };
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
          <ResumeButton />
        </ButtonContainer>
      </ButtonAndLinkContainer>
      <MobileLogoText>
        <LogoText>SLF</LogoText>
      </MobileLogoText>
      <HamburgerMenu
        onClick={() => {
          toggle();
          transformHamburger();
        }}
        isX={isX}
      >
        <HamburgerMenuLink href="#">
          <span />
          <span />
          <span />
        </HamburgerMenuLink>
      </HamburgerMenu>
    </Wrapper>
  );
};

export default Header;
