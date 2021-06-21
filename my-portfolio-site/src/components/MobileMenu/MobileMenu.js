import React, { useState } from "react";
import styled from "styled-components";
// import styled from "styled-components/macro";

import {
  Wrapper,
  ButtonContainer,
  GridNavOptions,
  GridDarkLightModeButton,
  GridResumeButton,
  WrapperVisbility,
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
