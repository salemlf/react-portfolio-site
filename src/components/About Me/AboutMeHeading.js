import React from "react";
import {
  Wrapper,
  Heading,
  HeadingDivContainer,
  UnderlineZigZag,
} from "./AboutMeHeadingStyles";

// TODO: pass in width for zig zig
const AboutMeHeading = ({ text, imgSrc, zzWidth, scale, width }) => {
  return (
    <Wrapper>
      <HeadingDivContainer>
        <Heading width={width}>{text}</Heading>
        <UnderlineZigZag src={imgSrc} zzWidth={zzWidth} scale={scale} />
      </HeadingDivContainer>
    </Wrapper>
  );
};

export default AboutMeHeading;
