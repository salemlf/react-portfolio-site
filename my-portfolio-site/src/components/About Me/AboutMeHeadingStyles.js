import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: max-content;
`;

//TODO: change to responsive text size
// TODO: make font-size larger
export const Heading = styled.h3`
  font-size: calc(15px + (70 - 15) * ((100vw - 250px) / (1600 - 250)));
  margin: 0;
  flex-basis: 100%;
  color: var(--mediumBlue);
  width: ${(props) => props.width};
`;

// TODO: change size of underlines
export const UnderlineZigZag = styled.img`
  color: ${(props) => props.color};
  width: ${(props) => props.zzWidth};
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
