import React from "react";
import styled from "styled-components";

import WavyBoyBottom from "../images/layered-waves-haikei-bottom.svg";
import WavyBoyTop from "../images/layered-waves-haikei-top.svg";

const Projects = () => {
  return (
    <Wrapper>
      <TopBgSection></TopBgSection>
      <BottomBgSection></BottomBgSection>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.section`
  position: relative;
  top: -40vw;
  width: 100%;
  min-height: 1000px;
`;

const TopBgSection = styled.div`
  width: 100%;
  height: 50%;
  aspect-ratio: 900/600;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${WavyBoyTop});
`;

const BottomBgSection = styled.div`
  width: 100%;
  height: 50%;
  aspect-ratio: 900/600;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${WavyBoyBottom});
`;
