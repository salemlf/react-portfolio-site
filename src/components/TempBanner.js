import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Banner = styled.div`
  flex-shrink: 0;
  height: 30vw;
  background-color: var(--tannish);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const BannerText = styled.h2`
  color: var(--mediumBlue);
  font-size: calc(18px + (60 - 18) * ((100vw - 250px) / (900 - 250)));
  margin: 0 auto;
`;

const TempBanner = () => {
  return (
    <BannerContainer>
      <Banner>
        <BannerText>MORE COMING SOON...</BannerText>
      </Banner>
    </BannerContainer>
  );
};

export default TempBanner;
