import React from "react";
import {
  Wrapper,
  Heading,
  HeadingDivContainer,
  UnderlineZigZag,
} from "./AboutMeHeadingStyles";

// TODO: pass in width for zig zig
const AboutMeHeading = ({ text, imgSrc, scale, width }) => {
  return (
    <Wrapper>
      <HeadingDivContainer>
        <Heading width={width}>{text}</Heading>
        <UnderlineZigZag src={imgSrc} scale={scale} />
      </HeadingDivContainer>
    </Wrapper>
  );
};

export default AboutMeHeading;
