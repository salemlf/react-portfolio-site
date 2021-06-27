import styled from "styled-components";

// TODO: add border radius prop
export const Wrapper = styled.div`
  position: ${(props) => props.pos};
  z-index: ${(props) => props.zIndex};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  max-height: ${(props) => props.maxHeight};
  background-color: ${(props) => props.bgColor};
  max-width: ${(props) => props.maxWidth};
  border-radius: 5px;
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  grid-area: 1 / 1 / 2 / 2;
`;
