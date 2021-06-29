import React from "react";
import { Wrapper, Heading, UnderlineZigZag } from "./AboutMeHeadingStyles";

const AboutMeHeading = ({ text, color, imgSrc }) => {
  return (
    <Wrapper>
      <Heading color={color}>{text}</Heading>
      <UnderlineZigZag src={imgSrc} />
    </Wrapper>
  );
};

export default AboutMeHeading;
