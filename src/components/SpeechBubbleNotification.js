import React from "react";
import styled, { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  `;

const SpeechBubble = styled.div`
  bottom: 138vw;
  left: 1%;
  position: relative;
  background: var(--tannish);
  border-radius: 2vw;
  width: 52vw;
  height: 28vw;
  max-height: 16vmax;
  max-width: 32vmax;
  z-index: 5;
  animation: 1s ease-out 0s 1 ${slideInFromLeft};
  bottom: 160vw;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 70%;
    width: 0;
    height: 0;
    border: 4vw solid transparent;
    border-top-color: var(--tannish);
    border-bottom: 0;
    border-right: 0;
    margin-left: -1vw;
    margin-bottom: -4vw;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  text-align: center;
  height: 100%;
  align-items: center;
  margin: 0 5%;
  font-size: calc(16px + (35 - 16) * ((100vw - 250px) / (1600 - 250)));
`;

const SpeechBubbleNotification = ({ children }) => {
  return (
    <SpeechBubble>
      <FlexContainer>{children}</FlexContainer>
    </SpeechBubble>
  );
};

export default SpeechBubbleNotification;
