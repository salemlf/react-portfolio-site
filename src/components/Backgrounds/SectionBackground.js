import React from "react";
import { Wrapper, BgImg } from "./SectionBackgroundStyles";

const SectionBackground = ({ top, transformStyles, imgSrc }) => {
  return (
    <Wrapper top={top}>
      <BgImg src={imgSrc} transformStyles={transformStyles}></BgImg>
    </Wrapper>
  );
};

export default SectionBackground;
