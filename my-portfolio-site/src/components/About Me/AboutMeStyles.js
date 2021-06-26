import styled from "styled-components";

export const Wrapper = styled.div`
  height: 2000px;
  width: 100%;
`;

export const AboutMeContent = styled.div`
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  top: -30vw;
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

export const BgImg = styled.img`
  width: 100%;
  height: auto;
  transform: scale(3.7);
  object-fit: cover;
`;

export const BgImgContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 140px;
`;
