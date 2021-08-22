import React from "react";
// TODO: change to macro
import styled from "styled-components";

const Hobbies = () => {
  return (
    <Wrapper>
      <Curve />
    </Wrapper>
  );
};

export default Hobbies;

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
  padding: 100px 20vw;
  width: 100%;
`;

const Curve = styled.div`
  position: absolute;
  height: 225px;
  width: 100%;
  bottom: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: var(--yellow);
    transform: translate(85%, 60%);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 55%;
    height: 100%;
    background-color: var(--yellow);
  }
`;
