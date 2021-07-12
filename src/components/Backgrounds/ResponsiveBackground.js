import React from "react";
import { Wrapper, Image, NameContent } from "./ResponsiveBackgroundStyles.js";

const ResponsiveBackground = ({
  image,
  passedHeight,
  altText,
  zIndex,
  top,
  maxHeight,
  children,
}) => {
  return (
    <Wrapper passedHeight={passedHeight} zIndex={zIndex} top={top}>
      <NameContent>{children}</NameContent>
      <Image src={image} alt={altText} maxHeight={maxHeight} />
    </Wrapper>
  );
};

export default ResponsiveBackground;
