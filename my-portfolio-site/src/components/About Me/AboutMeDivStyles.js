import styled from "styled-components";

// TODO: add border radius prop
export const Wrapper = styled.div`
  position: ${(props) => props.pos};
  display: flex;
  flex-wrap: wrap;
  /* min-height: ${(props) => props.minHeight}; */
  z-index: ${(props) => props.zIndex};
  /* height: ${(props) => props.height}; */
  /* width: ${(props) => props.width}; */
  /* max-height: ${(props) => props.maxHeight}; */
  background-color: ${(props) => props.bgColor};
  max-width: ${(props) => props.maxWidth};
  border-radius: 5px;
  /* margin-top: ${(props) => props.marginTop}; */
  /* margin-left: ${(props) => props.marginLeft}; */
  /* grid-area: 1 / 1 / 2 / 2; */
  grid-area: ${(props) => props.gridArea};
  grid-column: ${(props) => props.gridCol};
  grid-row: ${(props) => props.gridRow};
  background: ${(props) => props.bgAttr};
  top: ${(props) => props.top};
`;
