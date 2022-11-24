import styled from "styled-components";

const PriBtn = styled.button`
  position: relative;
  display: flex;
  width: max-content;
  justify-content: space-around;
  align-items: center;
  padding: 16px 30px;
  border-radius: ${({ bRad }) => bRad};
  font-family: "Campton-Light", sans-serif;
  font-size: ${({ fs }) => fs || "var(--fs-300)"};
  background-color: ${({ bgClr }) => bgClr || "#222"};
  box-shadow: 0px 2.25132px 11.8194px 1.12566px rgba(55, 48, 144, 0.53);
  color: #fff;
  border: none;
  cursor: pointer;
  overflow: hidden;

  img {
    margin-right: 1rem;
    pointer-events: none;
  }

  span {
    position: relative;
    translate: 0 3px;
  }
`;

export const PrimaryBtn = ({ text, icon, fs, bRad, bgClr }) => {
  return (
    <PriBtn fs={fs} bRad={bRad} bgClr={bgClr}>
      {icon && <img src={icon} alt="" />}
      {<span>{text}</span>}
    </PriBtn>
  );
};

export const SecondaryBtn = styled.button`
  display: flex;
  justify-content: space-around;
  padding: 16px 30px;
  font-family: "Campton-Bold", sans-serif;
  font-size: 20px;
  background-color: #fff;
  color: #222;
  border: 8px solid #000;
  cursor: pointer;

  img {
    margin-right: 1rem;
  }

  span {
    transform: translateY(5px);
  }

  @media only screen and (min-width: 50em) {
    border: 15px solid #000;
  }
`;

export const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  border: ${({ border }) => border || "none"};
  border-radius: ${({ bRad }) => bRad};
  background-color: ${({ bgClr }) => bgClr};
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
