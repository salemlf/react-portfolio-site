import React from "react";
import ResponsiveBackground from "../Backgrounds/ResponsiveBackground.js";
import {
  Wrapper,
  FlexWrapper,
  AboutMeContent,
  AboutDivContainer,
  NameHeading,
  NameSubtitle,
  SkillsWorkContent,
  WorkSkillItem,
  WorkSkillText,
  ArrowContainer,
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
import MeImage from "../../images/me.jpg";
import ImageBg from "../../images/photo-background.svg";

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
        // TODO: change from div to styled component
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
              bgAttr={"var(--yellow)"}
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
              height="37vw"
              width="33vw"
              bgAttr={`url(${MeImage}) center/contain no-repeat`}
              zIndex="3"
              marginLeft="76%"
              maxWidth="552px"
              maxHeight="510px"
              top="2%"
            ></AboutMeDiv>
            <AboutMeDiv
              pos="relative"
              height="50vw"
              width="53vw"
              bgAttr={`url(${ImageBg}) top right/cover no-repeat`}
              zIndex="2"
              marginLeft="32%"
              maxWidth="890px"
              maxHeight="841px"
              top="-2%"
            ></AboutMeDiv>
            <AboutMeDiv
              pos="relative"
              height="70vw"
              width="48vw"
              bgAttr={"var(--pink)"}
              zIndex="2"
              marginLeft="44%"
              marginTop="56%"
              maxWidth="830px"
              maxHeight="1175px"
            >
              <SkillsWorkContent>
                <AboutMeHeading
                  text="Skills"
                  imgSrc={SkillsUnderline}
                  zzWidth="12vw"
                  scale="scaleY(0.8)"
                />
                <WorkSkillItem>
                  <ArrowContainer></ArrowContainer>
                  <WorkSkillText>
                    JavaScript (Vanilla, React, Angular)
                  </WorkSkillText>
                </WorkSkillItem>
                <WorkSkillItem>
                  <ArrowContainer></ArrowContainer>
                  <WorkSkillText>
                    HTML and CSS (Styled Components, SASS/SCSS)
                  </WorkSkillText>
                </WorkSkillItem>
                <WorkSkillItem>
                  <ArrowContainer></ArrowContainer>
                  <WorkSkillText>Working with APIs</WorkSkillText>
                </WorkSkillItem>
              </SkillsWorkContent>
              <SkillsWorkContent>
                <AboutMeHeading
                  text="Work History"
                  imgSrc={WorkUnderline}
                  zzWidth="24vw"
                  scale="scaleY(0.7)"
                  width="max-content"
                />
                <WorkSkillItem>
                  <ArrowContainer></ArrowContainer>
                  <WorkSkillText>F5</WorkSkillText>
                </WorkSkillItem>
                <WorkSkillItem>
                  <ArrowContainer></ArrowContainer>
                  <WorkSkillText>Incyte</WorkSkillText>
                </WorkSkillItem>
                <WorkSkillItem>
                  <ArrowContainer></ArrowContainer>
                  <WorkSkillText>Moving Mountains</WorkSkillText>
                </WorkSkillItem>
                <WorkSkillItem>
                  <ArrowContainer></ArrowContainer>
                  <WorkSkillText>EWU</WorkSkillText>
                </WorkSkillItem>
              </SkillsWorkContent>
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
