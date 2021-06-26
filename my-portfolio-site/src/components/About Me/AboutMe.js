import React from "react";
import ResponsiveBackground from "../Backgrounds/ResponsiveBackground.js";
import {
  Wrapper,
  FlexWrapper,
  BgImg,
  BgImgContainer,
  AboutMeContent,
} from "./AboutMeStyles.js";
import NameDiv from "../../images/name-background-div.svg";
import PersonOnComputer from "../../images/person-on-computer.svg";
import SectionHeading from "../SectionHeadings/SectionHeading.js";
import InfoIcon from "../../images/Info Squared.svg";
import AboutMeDiv from "./AboutMeDiv.js";
import AboutBgBlob from "../../images/about-me-background-blob.svg";

const AboutMe = () => {
  return (
    <Wrapper>
      {/* <BgImgContainer>
        <BgImg src={AboutBgBlob} alt="" />
      </BgImgContainer> */}
      <ResponsiveBackground
        image={NameDiv}
        passedHeight={"100vw"}
        altText={"3D rectangle for name"}
        zIndex={1}
        top={"-17vw"}
        maxHeight={"96vmax"}
      />
      <ResponsiveBackground
        image={PersonOnComputer}
        passedHeight={"70vw"}
        altText={"Person on computer"}
        zIndex={2}
        top={"-75vw"}
        maxHeight={"75vmax"}
      />
      <FlexWrapper>
        <AboutMeContent>
          <SectionHeading
            text={"About Me"}
            color={"var(--pink)"}
            iconSrc={InfoIcon}
            altText={"Info icon for about me section"}
          />
          {/* TODO: use max-width on divs */}
          <AboutMeDiv height="500px" width="50%" bgColor={"var(--yellow)"} />
          <AboutMeDiv height="500px" width="50%" bgColor={"var(--pink)"} />
        </AboutMeContent>
        <BgImgContainer>
          <BgImg src={AboutBgBlob} alt="" />
        </BgImgContainer>
      </FlexWrapper>
    </Wrapper>
  );
};

export default AboutMe;
