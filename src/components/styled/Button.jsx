import styled from "styled-components";

const PriBtn = styled.button`
  position: relative;
  display: flex;
  width: max-content;
  justify-content: space-around;
  padding: 16px 30px;
  font-family: "Campton-Light", sans-serif;
  font-size: var(--fs-btn);
  background-color: #222;
  color: #fff;
  border: none;
  cursor: pointer;
  overflow: hidden;

  img {
    margin-right: 1rem;
    pointer-events: none;
  }

  span {
    transform: translateY(2px);
    pointer-events: none;
  }

  span.ripple {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    animation: animate 700ms linear forwards;
  }

  @keyframes animate {
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
`;

export const PrimaryBtn = ({ text, icon }) => {
  const rippleAnim = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.setAttribute("class", "ripple");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    e.target.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 700);
  };

  return (
    <PriBtn onClick={rippleAnim}>
      {icon && <img src={icon} alt="" />}
      {<span>{text}</span>}
    </PriBtn>
  );
};

export const SecondaryBtn = styled.button`
  display: flex;
  justify-content: space-around;
  padding: 16px 30px;
  font-family: "Campton-Light", sans-serif;
  font-size: var(--fs-btn);
  background-color: #fff;
  color: #222;
  border: 15px solid #000;
  cursor: pointer;

  img {
    margin-right: 1rem;
  }

  span {
    transform: translateY(5px);
  }
`;

export const IconBtn = styled.button`
  display: flex;
  justify-content: space-around;
  padding: 4px;
  border: none;
  background-color: #fff;
  cursor: pointer;

  img {
    margin-right: 1rem;
  }

  span {
    transform: translateY(5px);
  }
`;

export const SliderArrow = styled.button`
  position: absolute;
  left: 46%;
  top: 50%;
  display: grid;
  place-items: center;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background: #000;
  transform: translate(-50%, -50%);
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 36px;
  }

  @media only screen and (max-width: 50em) {
    width: 40px;
    top: 68%;
    left: 50%;

    svg {
      font-size: 24px;
    }
  }
`;
