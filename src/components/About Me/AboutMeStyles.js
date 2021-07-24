import styled from "styled-components";
import RightArrowImg from "../../images/right-arrow.svg";
import { keyframes } from "styled-components";

// TODO: create global variables for responsive font-size

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const AboutMeContent = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  top: -30vw;
  z-index: 1;
  justify-content: center;
`;

export const NameHeading = styled.h1`
  font-size: calc(24px + (100 - 24) * ((100vw - 250px) / (1600 - 250)));
  font-family: "Condiment", cursive;
  color: var(--mediumBlue);
  margin-bottom: 0px;
`;

export const NameSubtitle = styled.h1`
  font-size: calc(20px + (80 - 20) * ((100vw - 250px) / (1600 - 250)));
  font-family: "Condiment", cursive;
  color: var(--yellow);
  margin: -10px 0px 0px 0px;
`;

export const FlexWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  position: relative;
  top: -84vw;
`;

export const AboutDivContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "bio imageContainer"
    "workSkills workSkills";
  grid-template-rows: 1fr 1fr;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "bio"
      "imageContainer"
      "workSkills";
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 5%;
`;

export const BioText = styled.p`
  font-size: calc(16px + (32 - 16) * ((100vw - 250px) / (1600 - 250)));
`;

export const SkillsWorkContent = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 3% 2%;
  align-items: center;
`;

export const ArrowAnimation = keyframes`
    0%,100% {
      margin-left: 0;
    }
    50% {
      margin-left: calc(3% + (4 - 3) * ((100vw - 250px) / (1600 - 250)));
    }
`;

export const ArrowContainer = styled.div`
  position: absolute;
  margin-left: 0;
  background: url(${RightArrowImg}) no-repeat;
  background-size: cover;
  width: calc(16px + (50 - 16) * ((100vw - 250px) / (1600 - 250)));
  height: calc(16px + (50 - 16) * ((100vw - 250px) / (1600 - 250)));
`;

export const WorkSkillItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2%;
  margin-left: 10%;

  &:hover ${ArrowContainer} {
    animation-name: ${ArrowAnimation};
    animation-delay: 250ms;
    animation-timing-function: ease-in-out;
    animation-duration: 700ms;
    animation-iteration-count: 2;
  }
`;

export const WorkSkillText = styled.h6`
  position: relative;
  font-size: calc(16px + (32 - 16) * ((100vw - 250px) / (1600 - 250)));
  margin: 0;
  margin-left: 15%;
  font-weight: 300;
  color: var(--offWhite);
`;
