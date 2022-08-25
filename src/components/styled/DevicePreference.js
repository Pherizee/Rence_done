import styled from "styled-components";

export const ForMobile = styled.div`
  position: relative;
  height: auto;
  width: auto;
  opacity: 1;
  overflow: auto;

  @media only screen and (min-width: 50em) {
    position: absolute;
    height: 0;
    width: 1;
    opacity: 0;
    overflow: hidden;
  }
`;

export const ForDesktop = styled.div`
  position: relative;
  height: auto;
  width: auto;
  opacity: 1;
  overflow: auto;

  @media only screen and (max-width: 50em) {
    position: absolute;
    height: 0;
    width: 1;
    opacity: 0;
    overflow: hidden;
  }
`;
