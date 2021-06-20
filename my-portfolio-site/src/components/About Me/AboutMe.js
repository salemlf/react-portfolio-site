import React from "react";
import ResponsiveBackground from "../Backgrounds/ResponsiveBackground.js";
import { Wrapper, FlexWrapper } from "./AboutMeStyles.js";
import NameDiv from "../../images/name-background-div.svg";
import PersonOnComputer from "../../images/person-on-computer.svg";
import SectionHeading from "../SectionHeadings/SectionHeading.js";
import InfoIcon from "../../images/Info Squared.svg";

const AboutMe = () => {
  return (
    <Wrapper>
      <ResponsiveBackground
        image={NameDiv}
        passedHeight={"100vw"}
        altText={"3D rectangle for name"}
        zIndex={1}
        top={"-16vw"}
      />
      <ResponsiveBackground
        image={PersonOnComputer}
        passedHeight={"70vw"}
        altText={"Person on computer"}
        zIndex={2}
        top={"-79vw"}
      />
      <FlexWrapper>
        <SectionHeading
          text={"About Me"}
          color={"var(--pink)"}
          iconSrc={InfoIcon}
          altText={"Info icon for about me section"}
        />
      </FlexWrapper>
    </Wrapper>
  );
};

export default AboutMe;
