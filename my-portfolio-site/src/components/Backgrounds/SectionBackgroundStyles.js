import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: ${(props) => props.top};
  z-index: 0;
`;

export const BgImg = styled.img`
  width: 100%;
  height: unset;
  transform: ${(props) => props.transformStyles};
  object-fit: cover;
`;
