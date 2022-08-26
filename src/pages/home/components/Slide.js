import styled from "styled-components";

const Slide = styled.div`
  height: 110vh;

  .slide-container {
    display: flex;
    height: 100%;

    & > div {
      position: relative;
      height: 100%;
    }

    & .message {
      width: 46%;
    }

    & .image {
      width: 54%;
    }
  }

  .image {
    background-color: #ffd9eb;

    img {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 90%;
      transform: translateX(-50%);
    }
  }

  .message {
    background-color: #fed21721;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: min(calc(100% - 16px), 600px);
      height: 100%;
      margin-left: auto;
      padding-top: 80px;
    }

    .slide-heading {
      max-width: 75%;
      margin-bottom: 1rem;
    }

    .download-links {
      h2 {
        margin-bottom: 10px;
      }

      button {
        margin-bottom: 10px;
      }
    }
  }

  @media only screen and (max-width: 50em) {
    height: 100vh;

    .slide-container {
      flex-direction: column;

      & .message,
      & .image {
        width: 100%;
        height: 50%;
      }

      .message {
        background-color: #ffd9eb;

        .info {
          margin-left: 0;
        }
      }

      .slide-heading {
        position: absolute;
        top: 9%;
        left: 50%;
        width: 10ch;
        text-align: center;
        transform: translateX(-50%);
        z-index: 2;
      }

      .download-links {
        position: absolute;
        top: 147%;
        width: 100%;
        text-align: center;
        z-index: 2;

        &::before {
          content: "";
          position: absolute;
          top: 101%;
          left: 50%;
          width: 30%;
          height: 6px;
          border-radius: 10px;
          background-color: #000;
          transform: translateX(-50%);
        }

        button {
          margin-inline: auto;
        }
      }

      .image img {
        position: absolute;
        top: -55%;
        width: 85%;
      }
    }
  }
`;

export default Slide;
