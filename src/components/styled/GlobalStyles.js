import { createGlobalStyle } from "styled-components";
import CamptonBold from "../../assets/fonts/Campton-BoldDEMO.otf";
import CamptonLight from "../../assets/fonts/Campton-LightDEMO.otf";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: Campton-Bold;
  src: url(${CamptonBold});
}

@font-face {
  font-family: Campton-Light;
  src: url(${CamptonLight});
}

/* CSS RESETS */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  overflow-x: hidden;
  z-index: 1;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts*/
h1,
h2,
h3,
h4,
input,
button,
textarea,
select {
  font: inherit;
}

a {
  text-decoration: none;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
}

/* CSS VARIABLES */
:root {
  /* colors */
  --clr-neutral-100: #fff;
  --clr-neutral-700: #333;
  --clr-neutral-900: #000;

  --clr-primary: #ff017d;
  --clr-accent: #fed217;

  /* font sizes */
  --fs-300: 14px;
  --fs-400: 16px;
  --fs-700: 30px;
  --fs-900: 40px;
}

/* desktop sizes */
@media only screen and (min-width: 50em) {
  :root {
    --fs-300: 16px;
    --fs-400: 18px;
    --fs-500: 24px;
    --fs-700: 60px;
    --fs-900: 64px;
  }
}
/* GLOBAL STYLES */

body {
  font-family: "Campton-Light", sans-serif;
}

h1, h2, h3, h4, strong {
  font-family: "Campton-Bold", sans-serif;
}

.slick-arrow.slick-next {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.slick-arrow.slick-next::before {
  font-size: 32px;
}

.slick-arrow.slick-prev {
  transform: translateX(-50px);
}

.lock-scroll {
  overflow: hidden;
}

`;

export default GlobalStyles;
