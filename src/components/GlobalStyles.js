import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
--deepDarkBlue: hsl(231, 49%, 13%);
--mediumBlue: hsl(217, 45%, 20%);
--purple: hsl(277, 23%, 46%);
--pink: hsl(300, 52%, 69%);
--lightGreen: hsl(161, 60%, 58%);
--yellow: hsl(50, 70%, 64%);
--tannish: hsl(13, 48%, 75%);
--offWhite: hsl(38, 61%, 92%);

--mediumPurpleishBlueHover: hsla(255, 100%, 28%, 0.75);
--lightPurpleishBlueHover: hsla(255, 100%, 41%, 0.75);
--mobileMenuHover: hsla(275, 38, 61, 0.6);

${"" /* fonts */}
--font-lrg: 1.5rem;
--font-med: 1.125rem;
--font-sm: 0.875rem;

*,
*::before,
*::after {
  ${"" /* make children inherit box-sizing */}
  box-sizing: inherit;
}

.lock-scroll {
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
  line-height: 1.3;
  font-size: var(--font-med);
  font-weight: 300;
  background-color: var(--deepDarkBlue);

}
  a,
  a:visited,
  a:hover {
    text-decoration: none;
  }

  a:hover {
    cursor: pointer;
  }

  ${"" /* flexbox styles */}
  .flex {
    display: flex;

    .flex-jc-sb {
      justify-content: space-between;
    }

    .flex-jc-sa {
      justify-content: space-around;
    }

    .flex-jc-c {
      justify-content: center;
    }

    .flex-ai-c {
      align-items: center;
    }

    .flex-wrap {
      flex-wrap: wrap;
    }

    .flex-fd-row {
      flex-direction: row;
    }

    .flex-fd-col {
      flex-direction: column;
    }
  }

  ${"" /* added for mobile menu */}
  .active & {
    -moz-transform: translateX(-220px);
    -ms-transform: translateX(-220px);
    -webkit-transform: translateX(-220px);
    transform: translateX(-220px);
  }

  h2 {
    color: var(--pink);
    align-self: flex-start;
    margin-left: 20px;
    font-size: 40px;
    font-family: "Squada One", cursive;
    letter-spacing: 4px;
  }

  h3 {
    color: var(--yellow);
    font-size: 32px;
    font-family: "Squada One", cursive;
    font-weight: 300;
  }

  p {
    color: $offWhite;
  }

  ul.no-bullet {
    list-style-type: none;
    padding: 0;
    padding-left: 25px;
    margin: 0;
  }

  li {
    color: var(--offWhite);
  }

  li.arrow {
    background: url("/app/images/Right\ Arrow.svg") no-repeat left center;
    height: 56px;
    padding-left: 60px;
    padding-top: 6px;
    will-change: transform;
    transition: all 450ms;
    transition-delay: 200ms;
  }

  li.arrow:hover {
      transition: all 125ms;
      transition-delay: 0ms;
      margin-left: 10px;
      padding-left: 50px;
    }

  hr {
    width: 50%;
    min-width: 300px;
    border: 1px solid var(--yellow);
    align-self: flex-end;
  }
`;
export default GlobalStyles;
