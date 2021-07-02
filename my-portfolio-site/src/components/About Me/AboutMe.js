import React from "react";
import ResponsiveBackground from "../Backgrounds/ResponsiveBackground.js";
import {
  Wrapper,
  FlexWrapper,
  AboutMeContent,
  AboutDivContainer,
  NameHeading,
  NameSubtitle,
} from "./AboutMeStyles.js";
import NameDiv from "../../images/name-background-div.svg";
import PersonOnComputer from "../../images/person-on-computer.svg";
import SectionHeading from "../SectionHeadings/SectionHeading.js";
import InfoIcon from "../../images/Info Squared.svg";
import AboutMeDiv from "./AboutMeDiv.js";
import AboutBgBlob from "../../images/about-me-background-blob.svg";
import SectionBackground from "../Backgrounds/SectionBackground.js";
import AboutMeHeading from "./AboutMeHeading";

import AboutUnderline from "../../images/squiggle-line-about.svg";
import SkillsUnderline from "../../images/squiggly-line-skills.svg";
import WorkUnderline from "../../images/squiggly-line-work.svg";

const AboutMe = () => {
  return (
    <Wrapper>
      {/* TODO: pass in name as child */}
      <ResponsiveBackground
        image={NameDiv}
        passedHeight={"100vw"}
        altText={"3D rectangle for name"}
        zIndex={1}
        top={"-17vw"}
        maxHeight={"96vmax"}
        children={
          <div>
            <NameHeading>Salem Fenn</NameHeading>
            <NameSubtitle>Frontend Engineer</NameSubtitle>
          </div>
        }
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
          <AboutDivContainer>
            <AboutMeDiv
              pos="absolute"
              height="50vw"
              width="45vw"
              bgColor={"var(--yellow)"}
              zIndex="1"
              marginLeft="-50%"
              maxWidth="600px"
              maxHeight="800px"
            >
              <AboutMeHeading
                text="Bio"
                imgSrc={AboutUnderline}
                zzWidth="10vw"
                scale="scaleY(0.8)"
              />
            </AboutMeDiv>
            <AboutMeDiv
              pos="relative"
              height="55vw"
              width="45vw"
              bgColor={"var(--pink)"}
              zIndex="2"
              marginLeft="44%"
              marginTop="56%"
              maxWidth="600px"
              maxHeight="900px"
            >
              <AboutMeHeading
                text="Skills"
                imgSrc={SkillsUnderline}
                zzWidth="12vw"
                wrapHeight="40%"
                scale="scaleY(0.8)"
              />
              {/* TODO: add skills content here */}
              <AboutMeHeading
                text="Work History"
                imgSrc={WorkUnderline}
                zzWidth="24vw"
                wrapHeight="60%"
                scale="scaleY(0.7)"
              />
              {/* TODO: add work content here */}
            </AboutMeDiv>
          </AboutDivContainer>
        </AboutMeContent>
        <SectionBackground
          top="140px"
          transformStyles="scale(4.7) translateX(-8vw) rotate(169deg)"
          imgSrc={AboutBgBlob}
        />
      </FlexWrapper>
    </Wrapper>
  );
};

export default AboutMe;
