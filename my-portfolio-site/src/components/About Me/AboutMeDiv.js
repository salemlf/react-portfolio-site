import React from "react";
import { Wrapper } from "./AboutMeDivStyles.js";

const AboutMeDiv = ({ height, width, bgColor, maxWidth }) => {
  return (
    <Wrapper
      height={height}
      width={width}
      bgColor={bgColor}
      maxWidth={maxWidth}
    />
  );
};

export default AboutMeDiv;
