import React from "react";
import {
  Wrapper,
  InnerWrapper,
  HeadingText,
  Icon,
  Line,
  TextIconContainer,
} from "./SectionHeadingStyles.js";

// TODO: break into smaller components?
const SectionHeading = ({ color, text, iconSrc, altText, alignSelf, justifyContent, marginLeftHr }) => {
  return (
    <Wrapper justifyContent={justifyContent}>
      <InnerWrapper justifyContent={justifyContent}>
        <TextIconContainer>
          <HeadingText color={color} alignSelf={alignSelf}>
            {text}
          </HeadingText>
          <Icon src={iconSrc} alt={altText} />
        </TextIconContainer>
        <Line marginLeftHr ={marginLeftHr}/>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SectionHeading;
