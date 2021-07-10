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
  minHeight,
  gridArea,
  gridCol,
}) => {
  return (
    <Wrapper
      pos={pos}
      zIndex={zIndex}
      height={height}
      minHeight={minHeight}
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      bgAttr={bgAttr}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      top={top}
      gridArea={gridArea}
      gridCol={gridCol}
    >
      {children}
    </Wrapper>
  );
};

export default AboutMeDiv;
