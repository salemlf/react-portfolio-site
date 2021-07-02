import styled from "styled-components";
// import styled from "styled-components/macro";

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
  max-height: ${(props) => props.maxHeight};
`;

export const NameContent = styled.div`
  position: absolute;
  top: 26vw;
  width: 100%;
  text-align: center;
`;
