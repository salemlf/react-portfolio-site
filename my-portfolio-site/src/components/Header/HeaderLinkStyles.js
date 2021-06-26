import styled from "styled-components";
import { keyframes } from "styled-components";
// TODO: get rid of weird glitchiness between links

export const lineSquiggleAnimation1 = keyframes`
    0% {
      opacity: 1;
    }
    25%,
    50% {
      opacity: 0;
    }
    51%,
    75% {
      opacity: 0;
    }
    76%,
    100% {
      opacity: 0;
    }
`;

export const lineSquiggleAnimation2 = keyframes`
   0% {
      opacity: 0;
    }
    25%,
    50% {
      opacity: 1;
    }
    51%,
    75% {
      opacity: 0;
    }
    76%,
    100% {
      opacity: 0;
    }
`;

export const lineSquiggleAnimation3 = keyframes`
    0% {
      opacity: 0;
    }
    25%,
    50% {
      opacity: 0;
    }
    51%,
    75% {
      opacity: 1;
    }
    76%,
    100% {
      opacity: 0;
    }
`;

export const lineSquiggleAnimation4 = keyframes`
    0% {
      opacity: 0;
    }
    25%,
    50% {
      opacity: 0;
    }
    51%,
    75% {
      opacity: 0;
    }
    76%,
    100% {
      opacity: 1;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  height: max-content;
  /* width: 100px; */
`;

// TODO: pass in min and max font-sizes, use

export const Link = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  /* overflow: hidden; */
  font-size: calc(14px + (32 - 14) * ((100vw - 250px) / (1600 - 250)));
  color: var(--offWhite);
  cursor: pointer;
  transition: color 300ms ease-in-out;
  z-index: 3;
`;

/* slide in class */
export const SquigglyUnderlineContainer = styled.div`
  align-self: flex-end;
  position: absolute;
  left: -100%;
  /* width: 75px; */
  width: 100%;
  /* height: 25px; */
  transition: 1s;
  top: 10px;

  ${Wrapper}:hover & {
    left: 0;
    transition: 1s;
  }
`;

/* underline class*/
export const UnderlineInnerContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s ease-in;

  #wiggle-one {
    animation: ${lineSquiggleAnimation1} 500ms ease infinite;
  }
  #wiggle-two {
    animation: ${lineSquiggleAnimation2} 500ms ease infinite;
  }
  #wiggle-three {
    animation: ${lineSquiggleAnimation3} 500ms ease infinite;
  }
  #wiggle-four {
    animation: ${lineSquiggleAnimation4} 500ms ease infinite;
  }

  ${Wrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export const UnderlinePath = styled.path`
  fill: none;
  stroke: var(--yellow);
  stroke-width: 2;
  stroke-linecap: round;
  stroke-miterlimit: 10;
`;
