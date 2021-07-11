import React from "react";
import styled from "styled-components";

// TODO: add styles here
const EmojiSpan = styled.span``;

const Emoji = (props) => (
  <EmojiSpan
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </EmojiSpan>
);
export default Emoji;
