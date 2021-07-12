import styled from "styled-components";

export const Wrapper = styled.button`
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: filter 600ms;

  &:hover {
    transition: filter 250ms;
    filter: brightness(110%);
  }
`;

export const Shadow = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transform: translateY(6px);
  filter: blur(4px);

  ${Wrapper}:hover &, ${Wrapper}:active & {
    transform: translateY(10px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
`;

export const ButtonEdge = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

export const ButtonFront = styled.span`
  display: block;
  border-radius: 4px;
  color: white;
  will-change: transform;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  transform: translateY(-6px);

  ${Wrapper}:hover &, ${Wrapper}:active & {
    transform: translateY(-8px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  ${Wrapper}:focus & {
    transform: translateY(-4px);
    transition: transform 34ms;
  }
`;
