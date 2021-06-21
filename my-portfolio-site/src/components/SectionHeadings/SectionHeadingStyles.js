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
  font-size: 40px;
  letter-spacing: 4px;
  align-self: ${(props) => props.alignSelf};
  color: ${(props) => props.color};
`;

export const Icon = styled.img`
  width: 78px;
  height: 78px;
`;

export const TextIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
`;

export const Line = styled.hr`
  width: 50%;
  min-width: 300px;
  border: 1px solid var(--yellow);
  position: relative;
  right: 50%;
`;
