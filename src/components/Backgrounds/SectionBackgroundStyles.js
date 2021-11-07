import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: ${(props) => props.top};
  z-index: 0;
`;

export const BgImg = styled.img`
  width: 100%;
  height: initial;
  transform: ${(props) => props.transformStyles};
  /* TODO: change to contain? */
  object-fit: cover;
`;
