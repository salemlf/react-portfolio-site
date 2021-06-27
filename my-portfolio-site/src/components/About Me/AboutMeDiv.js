import React from "react";
import { Wrapper } from "./AboutMeDivStyles.js";

// TODO: pass in border-radius
const AboutMeDiv = ({ height, width, bgColor, maxWidth, zIndex, marginLeft, marginTop}) => {
  return (
    <Wrapper
      zIndex={zIndex}
      height={height}
      width={width}
      marginLeft={marginLeft}
      marginTop={marginTop}
      bgColor={bgColor}
      maxWidth={maxWidth}
    />
  );
};

export default AboutMeDiv;
