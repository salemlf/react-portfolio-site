import React from "react";
import { Wrapper } from "./AboutMeDivStyles.js";

// TODO: pass in border-radius
const AboutMeDiv = ({
  height,
  width,
  bgColor,
  maxWidth,
  zIndex,
  marginLeft,
  marginTop,
  maxHeight,
  pos,
  children,
}) => {
  return (
    <Wrapper
      pos={pos}
      zIndex={zIndex}
      height={height}
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      bgColor={bgColor}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
    >
      {children}
    </Wrapper>
  );
};

export default AboutMeDiv;
