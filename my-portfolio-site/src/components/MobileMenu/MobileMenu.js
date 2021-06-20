import React, { useState } from "react";
import styled from "styled-components";

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
    <WrapperVisbility isOpen={isOpen}>
      <ButtonContainer>
        <GridDarkLightModeButton />
        <GridResumeButton />
      </ButtonContainer>
      <GridNavOptions />
    </WrapperVisbility>
  );
}

export default MobileMenu;
