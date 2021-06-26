import styled from "styled-components";
// import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  flex-basis: 100%;
`;

// TODO: pass margin-left value?
// TODO: change px to em
// TODO: change font-family
export const HeadingText = styled.h2`
  text-transform: uppercase;
  /* font-size: 40px; */
  font-size: calc(24px + (70 - 24) * ((100vw - 250px) / (1600 - 250)));
  letter-spacing: 5px;
  align-self: ${(props) => props.alignSelf};
  color: ${(props) => props.color};
`;

export const Icon = styled.img`
  width: calc(30px + (78 - 30) * ((100vw - 250px) / (1600 - 250)));
  height: calc(30px + (78 - 30) * ((100vw - 250px) / (1600 - 250)));
`;

export const TextIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: max-content;
`;

export const Line = styled.hr`
  width: 50%;
  min-width: 300px;
  border: 1px solid var(--yellow);
  position: relative;
  right: 50%;
`;
