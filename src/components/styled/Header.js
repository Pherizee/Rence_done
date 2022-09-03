import styled from "styled-components";

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-block: 1em;
  z-index: 5;

  & > div {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 50em) {
    position: relative;
  }
`;

export const Logo = styled.div`
  margin-right: auto;
  max-width: 64px;

  @media only screen and (max-width: 50em) {
    max-width: 74px;
  }
`;

export const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    margin-right: 18px;
  }

  a {
    display: flex;
    align-items: center;
    margin-inline: 2px;
    padding: 14px;
    color: var(--clr-neutral-700);
    font-size: var(--ff-size-400);

    &.active {
      position: relative;
      font-family: "Campton-Bold";
      color: var(--clr-neutral-900);

      &::before {
        content: "";
        position: absolute;
        top: 90%;
        left: 50%;
        width: 50%;
        height: 4px;
        border-radius: 5px;
        background-color: var(--clr-neutral-900);
        transform: translateX(-50%);
      }
    }

    span {
      padding-top: 5px;
    }
  }

  @media only screen and (max-width: 50em) {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 75%;
    height: 100vh;
    padding: 30px 20px;
    background-color: var(--clr-neutral-100);
    transform: translateX(100%);
    transition: 500ms;
    z-index: 10;

    ul {
      flex-direction: column;
    }

    a {
      width: 100%;
      margin-bottom: 18px;
      padding: 12px 18px;

      &.active {
        border-radius: 10px;
        background-color: #fff9e1;

        &::before {
          height: 0;
        }
      }

      img {
        margin-right: 1rem;
      }
    }

    .download-links {
      text-align: center;

      h2 {
        font-size: 18px;
        margin-bottom: 1rem;
      }

      button {
        width: 100%;
        margin-bottom: 0.6rem;
      }
    }

    &.open {
      transform: translateX(0);
    }
  }
`;
