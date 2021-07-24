import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: max-content;
`;

export const Heading = styled.h3`
  font-size: calc(26px + (50 - 26) * ((100vw - 250px) / (1600 - 250)));
  margin: 0;
  flex-basis: 100%;
  color: var(--mediumBlue);
  width: ${(props) => props.width};
`;

export const UnderlineZigZag = styled.img`
  color: ${(props) => props.color};
  width: 100%;
  transform: ${(props) => props.scale};
`;

export const HeadingDivContainer = styled.div`
  display: flex;
  width: min-content;
  flex-wrap: wrap;
  justify-content: flex-start;
  text-align: center;
  align-content: flex-start;
`;
