import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        @font-face {
          font-family: "Montserrat", "Work Sans";
          font-style: normal;
          src: url("https://fonts.googleapis.com/css?family=Montserrat:900|Work+Sans:300");
        }
        main,
        footer {
          font-family: "Work Sans", sans-serif;
          font-weight: 300;
          overflow: auto;
        }

        header {
          font-family: "Montserrat", sans-serif;
          font-weight: 900;
          h1 {
            margin: 0px;
            margin-top: 1em;
          }
          h2 {
            margin: 0px;
            margin-bottom: 1em;
            font-size: 18px;
          }
        }
        :root {
          background-color: #fff7e6;
        }
      `}
    />
  );
}

export default GlobalStyles;

/* 

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

*/
