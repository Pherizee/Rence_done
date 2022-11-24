import styled from "styled-components";
import Container from "../../../components/styled/Container";
import { SectionHeading, Subtitle } from "../../../components/styled/Headings";
import { PrimaryBtn } from "../../../components/styled/Button";
import iPhone1 from "../../../assets/images/iPhone1.png";
import iPhone2 from "../../../assets/images/iPhone2.png";
import ellipse1 from "../../../assets/images/ellipse1.png";
import ellipse2 from "../../../assets/images/ellipse2.png";
import ellipse1Mob from "../../../assets/images/ellipse1-mob.png";
import ellipse2Mob from "../../../assets/images/ellipse2-mob.png";
import ellipse3 from "../../../assets/images/ellipse3.png";
import AppUI from "../../../assets/images/app-ui.png";
import ManageBg from "../../../assets/images/manageBg.png";

const OnboardSection = () => {
  const viewWidth = window.innerWidth;

  return (
    <>
      <GetPackage>
        <Container>
          <div>
            <SectionHeading>
              Get your package <br /> delivered with ease
            </SectionHeading>
            <Subtitle>
              Let’s connect you with the best credible and trusted rider in your
              vicinity, when needed. <br />
              <strong>Bonus point:</strong> you get to monitor your ride
              progress.
            </Subtitle>
            <PrimaryBtn text={"Get the App"} fs="var(--fs-400)" />
          </div>
          <PhonePic>
            <img src={iPhone1} alt="" />
          </PhonePic>
        </Container>
        <img src={ellipse1} alt="" />
      </GetPackage>

      <StartEarning>
        <Container>
          <div>
            <SectionHeading>
              Quit Lurking,
              <br /> Start Earning
            </SectionHeading>
            <Subtitle>
              <strong>‘Rence Rider App</strong> gives you the opportunity to
              make money anywhere, anytime, and from anyone
            </Subtitle>
            <PrimaryBtn text={"Get the App"} fs="var(--fs-400)" />
          </div>
          <PhonePic>
            <img src={AppUI} alt="" />
          </PhonePic>
        </Container>
      </StartEarning>

      <ManageRiders mb={viewWidth}>
        <Container>
          <div>
            <SectionHeading>
              Manage your riders’ movement and earnings with ease
            </SectionHeading>
            <Subtitle>
              <strong>‘Rence Admin App</strong> will provide you with the best
              dispatch delivery management system.
            </Subtitle>
          </div>
          <PhonePic>
            <img src={iPhone1} alt="" />
          </PhonePic>
        </Container>
      </ManageRiders>

      <DivertRoute>
        <Container>
          <div>
            <SectionHeading>
              Divert Route Regardless of Delivery Location
            </SectionHeading>
            <Subtitle>
              <strong>‘Rence Rider App</strong> will connect you with another
              rider in your vicinity to transfer your delivery package to as a
              rider, in case you don’t want to continue on the route.
            </Subtitle>
          </div>
          <div>
            <PhonePic>
              <img src={iPhone1} alt="" />
            </PhonePic>
          </div>
        </Container>
      </DivertRoute>
    </>
  );
};

export default OnboardSection;

const GetPackage = styled.section`
  position: relative;
  padding-bottom: 40px;
  background-image: url(${ellipse1Mob});
  background-position: 90% bottom;
  background-repeat: no-repeat;

  & > div div {
    padding-block: 50px;
  }

  & > img {
    display: none;
  }

  button {
    margin-inline: auto;
  }

  @media only screen and (min-width: 50em) {
    padding-block: 120px;
    background-image: none;

    & > div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;

      & > div {
        width: 59%;

        h2,
        p {
          margin-inline: 0;
          text-align: left;
        }

        button {
          margin-inline: 0;
        }
      }
    }

    & > img {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;
    }
  }
`;

const StartEarning = styled.section`
  margin-bottom: 80px;
  padding-top: 64px;
  background-image: url(${ellipse2Mob});
  background-repeat: no-repeat;
  background-position: center bottom;

  & > div div,
  figure {
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 50em) {
    button {
      margin-inline: auto;
    }
  }

  @media only screen and (min-width: 50em) {
    padding-block: 120px;
    background-image: url(${ellipse2});
    background-position: right bottom;

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div {
        width: 59%;

        h2,
        p {
          margin-inline: 0;
          text-align: left;
        }
      }
    }
  }
`;

const ManageRiders = styled.section`
  position: relative;
  margin-bottom: ${({ mb }) => mb * 2 * 0.75 + "px" || "600px"};
  padding-block: 2.5rem;
  background-image: url(${ManageBg});
  background-position: center center;
  background-size: cover;

  figure {
    position: absolute;
    top: 90%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
  }

  @media only screen and (min-width: 50em) {
    margin-bottom: ${({ mb }) => mb * 2 * 0.75 * 0.4 + "px" || "600px"};
    padding-block: 180px;

    figure {
      top: 80%;
      width: 25%;
      margin-inline: auto;
    }
  }
`;

const DivertRoute = styled.section`
  margin-bottom: 120px;

  & div > div:nth-child(2) {
    background-image: url(${ellipse3});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
  }

  figure {
    width: 90%;
    margin-inline: auto;
    rotate: 30deg;
  }

  @media only screen and (min-width: 50em) {
    margin-bottom: 220px;

    & div > div:nth-child(2) {
      background-size: 48%;
    }

    h2 {
      max-width: 17ch;
    }

    p {
      max-width: 40ch;
    }

    figure {
      width: 30%;
      margin-top: 80px;
      margin-bottom: 80px;
      margin-inline: auto;
    }
  }
`;

const PhonePic = styled.figure`
  & > img {
    width: 70%;
    margin-inline: auto;
  }

  @media only screen and (min-width: 50em) {
    width: 34%;

    img {
      width: 100%;
    }
  }
`;
