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
  left: 25%;
  position: relative;
  background: var(--tannish);
  border-radius: 2vw;
  width: 30vw;
  height: 15vw;
  max-height: 300px;
  max-width: 500px;
  z-index: 5;
  animation: 1s ease-out 0s 1 ${slideInFromLeft};

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
  font-size: calc(5px + (30 - 5) * ((100vw - 250px) / (1600 - 250)));
`;

const SpeechBubbleNotification = ({ children }) => {
  return (
    <SpeechBubble>
      <FlexContainer>{children}</FlexContainer>
    </SpeechBubble>
  );
};

export default SpeechBubbleNotification;
