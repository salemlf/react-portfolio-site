import React from "react";
import { Wrapper } from "./AboutMeDivStyles.js";

// TODO: pass in border-radius
const AboutMeDiv = ({
  bgAttr,
  maxWidth,
  zIndex,
  pos,
  children,
  top,
  gridArea,
  justifySelf,
  margin,
}) => {
  return (
    <Wrapper
      margin={margin}
      justifySelf={justifySelf}
      pos={pos}
      zIndex={zIndex}
      bgAttr={bgAttr}
      maxWidth={maxWidth}
      top={top}
      gridArea={gridArea}
    >
      {children}
    </Wrapper>
  );
};

export default AboutMeDiv;
