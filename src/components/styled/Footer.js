import styled from "styled-components";

export const FooterContainer = styled.div`
  padding-block: 5rem 2rem;
  display: flex;
  justify-content: space-between;

  ul {
    list-style: none;
  }

  h3 {
    font-size: var(--fs-400);
    margin-bottom: 1.2rem;
  }

  a {
    color: #000;
  }

  @media only screen and (max-width: 50em) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

export const FooterLogo = styled.div`
  width: 10%;

  @media only screen and (max-width: 50em) {
    width: 20%;

    img {
      margin-inline: auto;
    }
  }
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;

  li {
    margin-bottom: 0.8rem;
  }

  @media only screen and (max-width: 50em) {
    width: 70%;
  }

  @media only screen and (max-width: 35em) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

export const Discover = styled.div`
  padding-top: 1rem;
  width: 20%;

  .download button {
    width: 100%;
    max-width: 280px;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 50em) {
    width: 70%;

    h3 {
      margin-block: 3rem;
      text-align: center;
    }

    .download {
      display: flex;
      justify-content: space-around;
      gap: 5%;
    }
  }

  @media only screen and (max-width: 35em) {
    .download {
      flex-direction: column;
    }
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;

  svg {
    font-size: 2rem;
  }
`;

export const FooterBottom = styled.div`
  padding-block: 1rem;
  text-align: center;
`;
