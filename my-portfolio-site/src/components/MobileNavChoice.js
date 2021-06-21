import React from "react";
import styled from "styled-components";

// TODO: move style into their own file
const Wrapper = styled.a`
  color: #f7eede;
  text-decoration: none;
  border-left: 5px solid #7b5b92;

  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    background: hsla(275, 38%, 61%, 0.6);
    border-left: 5px solid #deab9e;

    .mobile-icon-default {
      display: none;
    }
    .mobile-icon-hover {
      display: inline-block;
    }

    li {
      color: #deab9e;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: clamp(16px, 11vw, 60px);
  margin: 14px 0;
  padding: 0 0;
  align-content: center;
  align-items: center;

  li {
    list-style-type: none;
    display: inline-block;
    margin-left: 1vw;
    font-size: clamp(1rem, 4vw, 2rem);
    font-weight: 700;
    letter-spacing: 8px;
    text-transform: uppercase;
    transition: opacity 400ms ease-in-out;
    font-family: "Squada One", cursive;
  }

  .mobile-icon-default {
    display: inline-block;
  }

  .mobile-icon-hover {
    display: none;
  }
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  align-self: auto;
`;

const ChangeLink = styled.div`
  all: initial;
  cursor: pointer;
  display: inline-block;
  margin-left: 8vw;
  position: relative;
  height: 0;
  width: clamp(1.5rem, 8vw, 3rem);
  padding: 0;
  padding-bottom: 100%;
`;

const MobileIcon = styled.svg`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

function MobileNavChoice({
  navItem,
  link,
  svgPathsDefault,
  svgPathsHover,
  svgDefaultID,
  svgHoverID,
  viewBoxArg,
}) {
  return (
    <Wrapper href={link}>
      <Row className="row">
        <NavColumn className="col">
          <svg
            display="none"
            viewBox={`0 0 ${viewBoxArg} ${viewBoxArg}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {svgPathsDefault}
              {svgPathsHover}
            </defs>
          </svg>
          <ChangeLink className="change-link">
            <MobileIcon
              className="mobile-icon mobile-icon-default"
              viewBox={`0 0 ${viewBoxArg} ${viewBoxArg}`}
            >
              <use href={svgDefaultID} />
            </MobileIcon>
            <MobileIcon
              className="mobile-icon mobile-icon-hover"
              viewBox={`0 0 ${viewBoxArg} ${viewBoxArg}`}
            >
              <use href={svgHoverID} />
            </MobileIcon>
          </ChangeLink>
        </NavColumn>
        <NavColumn className="col">
          <li>{navItem}</li>
        </NavColumn>
      </Row>
    </Wrapper>
  );
}

export default MobileNavChoice;
