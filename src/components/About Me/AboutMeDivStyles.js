import styled from "styled-components";

// TODO: add border radius prop
export const Wrapper = styled.div`
  position: ${(props) => props.pos};
  display: flex;
  flex-wrap: wrap;
  z-index: ${(props) => props.zIndex};
  background-color: ${(props) => props.bgColor};
  max-width: ${(props) => props.maxWidth};
  border-radius: 5px;
  grid-area: ${(props) => props.gridArea};
  grid-column: ${(props) => props.gridCol};
  grid-row: ${(props) => props.gridRow};
  background: ${(props) => props.bgAttr};
  top: ${(props) => props.top};
`;
