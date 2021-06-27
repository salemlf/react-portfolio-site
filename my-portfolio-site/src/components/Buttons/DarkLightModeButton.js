import React from "react";
import styled from "styled-components";
// import styled from "styled-components/macro";
import SunIcon from "../../images/sun.svg";

const Wrapper = styled.button`
  background-color: #e3ce63;
  border-radius: 5px;
  padding: 0.25rem;
  margin: 0 20px 0 10px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.1);
  height: 10vw;
  width: 10vw;
  max-height: 60px;
  max-width: 60px;
  min-height: 30px;
  min-width: 30px;
  font-weight: 400;
  cursor: pointer;
  background-image: url(${SunIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 0.3s;
  opacity: 1;
  :hover {
    opacity: 0.75;
  }
`;

function DarkLightModeButton({ className }) {
  return <Wrapper className={className} />;
}

export default DarkLightModeButton;
