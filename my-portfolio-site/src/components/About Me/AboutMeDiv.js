import React from "react";
import { Wrapper } from "./AboutMeDivStyles.js";

// TODO: pass in border-radius
const AboutMeDiv = ({
  height,
  width,
  bgAttr,
  maxWidth,
  zIndex,
  marginLeft,
  marginTop,
  maxHeight,
  pos,
  children,
  top,
}) => {
  return (
    <Wrapper
      pos={pos}
      zIndex={zIndex}
      height={height}
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      bgAttr={bgAttr}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      top={top}
    >
      {children}
    </Wrapper>
  );
};

export default AboutMeDiv;
