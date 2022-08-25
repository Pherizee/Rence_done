import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  opacity: 0;
  transition: opacity 400ms;
  transform: translateX(-105%);
  z-index: -2;

  &.open {
    opacity: 0.3;
    transform: translateX(0);
    z-index: 8;
  }
`;

export default Overlay;
