import styled from "styled-components";

// TODO: add left, right, border radius, and position properties to pass
export const Wrapper = styled.div`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
`;
