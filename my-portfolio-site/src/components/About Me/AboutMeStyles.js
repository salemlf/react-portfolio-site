import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const AboutMeContent = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  top: -30vw;
  z-index: 1;
  justify-content: center;
`;

export const NameHeading = styled.h1`
  font-size: calc(20px + (100 - 20) * ((100vw - 250px) / (1600 - 250)));
  font-family: "Condiment", cursive;
  color: var(--mediumBlue);
  margin-bottom: 0px;
`;

export const NameSubtitle = styled.h1`
  font-size: calc(18px + (80 - 18) * ((100vw - 250px) / (1600 - 250)));
  font-family: "Condiment", cursive;
  color: var(--yellow);
  margin: 2px 0px 0px 0px;
`;

export const FlexWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  position: relative;
  top: -48vw;
`;

export const AboutDivContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  position: relative;
  width: 90%;
`;
