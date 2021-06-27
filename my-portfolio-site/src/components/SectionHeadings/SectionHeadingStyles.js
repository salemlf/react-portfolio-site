import styled from "styled-components";
// import styled from "styled-components/macro";

export const Wrapper = styled.div`
  width: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* justify-content:${(props) => props.justifyContent}; */
  margin-bottom: 10px;
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
  width: max-content;
  margin-bottom: 5px;
`;

export const Icon = styled.img`
  width: calc(30px + (78 - 30) * ((100vw - 250px) / (1600 - 250)));
  height: calc(30px + (78 - 30) * ((100vw - 250px) / (1600 - 250)));
`;

export const TextIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: max-content;
  margin-left: 0;
  justify-content: left;
`;

export const Line = styled.hr`
  width: 50%;
  min-width: 176px;
  border: 1px solid var(--yellow);
  position: relative;
  margin-left: ${(props) => props.marginLeftHr};
  font-size: unset;
`;
