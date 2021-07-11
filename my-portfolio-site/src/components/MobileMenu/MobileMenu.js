import React from "react";

import {
  Wrapper,
  ButtonContainer,
  GridNavOptions,
  GridDarkLightModeButton,
  GridResumeButton,
} from "./MobileMenuStyles.js";

function MobileMenu({ toggle, isOpen }) {
  return (
    // TODO: change to use WrapperVisbility
    <Wrapper isOpen={isOpen}>
      <ButtonContainer>
        <GridDarkLightModeButton />
        <GridResumeButton />
      </ButtonContainer>
      <GridNavOptions />
    </Wrapper>
  );
}

export default MobileMenu;
