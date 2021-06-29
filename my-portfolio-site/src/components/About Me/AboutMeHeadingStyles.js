import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
`;

/* TODO: change to responsive text size */
export const Heading = styled.h3`
  font-size: 30px;
`;

export const UnderlineZigZag = styled.img`
  color: ${(props) => props.color};
  width: 100%;
`;
