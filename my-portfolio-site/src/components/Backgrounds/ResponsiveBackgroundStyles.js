import styled from "styled-components";

// TODO: add max-height?
export const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.passedHeight};
  position: relative;
  z-index: ${(props) => props.zIndex};
  top: ${(props) => props.top};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
