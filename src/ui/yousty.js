/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from "styled-components"
import { MOBILE_S, DEFAULT, XL } from "./breakpoints"

export const GlobalStyle = createGlobalStyle`
  html {
    --font-primary: 'Noto Sans', sans-serif;
    --font-secondary: 'Montserrat', sans-serif;
    --color-primary: #6A205F;
    --color-secondary: rgb(255,255,255);
    --color-tertiary: rgba(0, 0, 0, 0.16);
    --color-lighter: #E8E8E8;
    --color-darker: #616161;
    --color-background: #EFEFEF;
    --color-orange: #e6a54b;
    --color-green: #1FD581;
    --color-red: #D03D59;
    --font-color-primary: #333333;
    --font-color-secondary: #FFFFFF;
    --font-color-yousty: #6A205F;
    --font-color-error: #D03D59;
    --font-color-faded: #BBBEC1;
    --elevation-none: 0;
    --elevation-default: 0 0 2px 0px rgba(0, 0, 0, 0.35);
    --elevation-1: 0 3px 5px 0 rgba(0, 0, 0, 0.18),
                0 0 2px 1px rgba(0, 0, 0, 0.08);
    --elevation-2: 0 6px 8px 0 rgba(0, 0, 0, 0.26),
                0 0 11px 3px rgba(0, 0, 0, 0.18);
    --elevation-3: 0 12px 9px 0px rgba(0, 0, 0, 0.26),
                0 0 12px 4px rgba(0, 0, 0, 0.18);
    --elevation-4: 0 24px 18px 0 rgba(0, 0, 0, 0.26),
                0 0 14px 10px rgba(0, 0, 0, 0.18);
    --elevation-5:  0 12px 4px 0 rgba(0, 0, 0, 0.26),
                0 0 9px 8px rgba(0, 0, 0, 0.18);
    --text-shadow-default: 0 1px 2px rgba(0, 0, 0, 0.3);
    font-size: 11px;
    font-family: var(--font-primary);

    @media (min-width: ${MOBILE_S}) {
      font-size: 12px;
    }
    @media (min-width: ${DEFAULT}) {
      font-size: 15px;
    }
    @media (min-width: ${XL}) {
      font-size: 18px;
    }
  }

  body {
    margin: 0;
    background: var(--color-background, white);
  }
`
