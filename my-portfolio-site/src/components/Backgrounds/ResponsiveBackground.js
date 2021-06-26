import React from "react";
import { Wrapper, Image } from "./ResponsiveBackgroundStyles.js";

const ResponsiveBackground = ({
  image,
  passedHeight,
  altText,
  zIndex,
  top,
  maxHeight,
}) => {
  return (
    <Wrapper passedHeight={passedHeight} zIndex={zIndex} top={top}>
      <Image src={image} alt={altText} maxHeight={maxHeight} />
    </Wrapper>
  );
};

export default ResponsiveBackground;
