import React from "react";
import {
  Wrapper,
  HeadingText,
  Icon,
  Line,
  TextIconContainer,
} from "./SectionHeadingStyles.js";

// TODO: break into smaller components?
const SectionHeading = ({ color, text, iconSrc, altText, alignSelf }) => {
  return (
    <Wrapper>
      <TextIconContainer>
        <HeadingText color={color} alignSelf={alignSelf}>
          {text}
        </HeadingText>
        <Icon src={iconSrc} alt={altText} />
      </TextIconContainer>
      <Line />
    </Wrapper>
  );
};

export default SectionHeading;
