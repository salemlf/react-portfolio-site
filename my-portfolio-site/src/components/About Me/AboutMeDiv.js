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
  gridCol,
  gridRow,
}) => {
  return (
    <Wrapper
      pos={pos}
      zIndex={zIndex}
      bgAttr={bgAttr}
      maxWidth={maxWidth}
      top={top}
      gridArea={gridArea}
      gridCol={gridCol}
      gridRow={gridRow}
    >
      {children}
    </Wrapper>
  );
};

export default AboutMeDiv;
