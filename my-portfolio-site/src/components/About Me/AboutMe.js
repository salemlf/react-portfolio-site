import React from "react";
import ResponsiveBackground from "../Backgrounds/ResponsiveBackground.js";
import {
  Wrapper,
  FlexWrapper,
  BgImg,
  BgImgContainer,
  AboutMeContent,
  AboutDivContainer
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
      {/* TODO: add text here with this font: font-family: 'Condiment', cursive; */}
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
            text="About Me"
            color={"var(--pink)"}
            iconSrc={InfoIcon}
            altText="Info icon for about me section"
            marginLeftHr="20px"
          />
          {/* TODO: use max-width on divs */}
          <AboutDivContainer>
            <AboutMeDiv height="50vw" width="45vw" bgColor={"var(--yellow)"} zIndex="1" marginLeft="-22vw"/>
            <AboutMeDiv height="55vw" width="45vw" bgColor={"var(--pink)"} zIndex="2" marginLeft="22vw" marginTop="40vw"/>
          </AboutDivContainer>
        </AboutMeContent>
        <BgImgContainer>
          <BgImg src={AboutBgBlob} alt="" />
        </BgImgContainer>
      </FlexWrapper>
    </Wrapper>
  );
};

export default AboutMe;
