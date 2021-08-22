import React from "react";
import ResponsiveBackground from "../components/Backgrounds/ResponsiveBackground.js";
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
  AboutTextContainer,
  BioText,
} from "../components/About Me/AboutMeStyles.js";
import NameDiv from "../images/name-background-div.svg";
import PersonOnComputer from "../images/person-on-computer.svg";
import SectionHeading from "../components/SectionHeadings/SectionHeading.js";
import InfoIcon from "../images/Info Squared.svg";
import AboutMeDiv from "../components/About Me/AboutMeDiv.js";
import AboutBgBlob from "../images/about-me-background-blob.svg";
import SectionBackground from "../components/Backgrounds/SectionBackground.js";
import AboutMeHeading from "../components/About Me/AboutMeHeading";

import AboutUnderline from "../images/squiggle-line-about.svg";
import SkillsUnderline from "../images/squiggly-line-skills.svg";
import WorkUnderline from "../images/squiggly-line-work.svg";
import MeImage from "../images/me.jpg";
import Sparkles from "../components/Sparkles.js";
import Emoji from "../components/Emoji.js";
import SpeechBubbleNotification from "../components/SpeechBubbleNotification.js";

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
            <Sparkles>
              <NameHeading>Salem Fenn</NameHeading>
            </Sparkles>
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
      <SpeechBubbleNotification>
        <h6>
          FYI: This site in a work in progress! I decided to release what I've
          done so far and will be adding on the other sections soon.
        </h6>
      </SpeechBubbleNotification>
      <FlexWrapper>
        <AboutMeContent>
          <SectionHeading
            text="About Me"
            color={"var(--pink)"}
            iconSrc={InfoIcon}
            altText="Info icon for about me section"
            marginLeftHr="20px"
            id="about"
          />
          <AboutDivContainer>
            <AboutMeDiv
              pos="relative"
              bgAttr={"var(--yellow)"}
              zIndex="3"
              marginLeft="-50%"
              maxWidth="600px"
              maxHeight="750px"
              minHeight="230px"
              gridArea="bio"
            >
              <AboutTextContainer>
                <AboutMeHeading
                  text="Bio"
                  imgSrc={AboutUnderline}
                  zzWidth="10vw"
                  scale="scaleY(0.8)"
                />
                <BioText>
                  <strong>Hello there.</strong>
                  <br /> I'm a software engineer living in Spokane, WA. My
                  skillset definitely leans towards frontend, but I also have
                  past experience with backend. I create accessible user
                  interfaces and focus on providing others with software that
                  makes their lives easier. My first exposure to
                  programming/code was creating Runescape gold hacks as a child.
                  <Emoji
                    label="laughing face emoji"
                    size="10px"
                    symbol="😅"
                  ></Emoji>
                  <br />I now work at F5 as a software engineer and create tools
                  for fellow developers.
                </BioText>
              </AboutTextContainer>
            </AboutMeDiv>
            <AboutMeDiv
              pos="relative"
              zIndex="3"
              gridArea="imageContainer"
              bgAttr={`url(${MeImage}) center center/contain no-repeat`}
              gridCol="2 / 3"
              gridRow="1 / 2"
              maxWidth="530px"
            ></AboutMeDiv>
            <AboutMeDiv
              pos="relative"
              height="70vw"
              width="48vw"
              bgAttr={"var(--pink)"}
              zIndex="2"
              maxWidth="830px"
              maxHeight="1175px"
              gridArea="workSkills"
              gridCol="2 / 4"
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
                    JavaScript (Vanilla, React, AngularJS)
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
