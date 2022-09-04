import styled from "styled-components";
import Container from "../../../components/styled/Container";
import { SectionHeading, Subtitle } from "../../../components/styled/Headings";
import { ReactComponent as Phone1lg } from "../../../assets/images/phone1-lg.svg";
import { ReactComponent as Phone1sm } from "../../../assets/images/phone1-sm.svg";
import { ReactComponent as Phone2lg } from "../../../assets/images/phone2-lg.svg";
import { ReactComponent as Phone2sm } from "../../../assets/images/phone2-sm.svg";
import { ReactComponent as Phone3lg } from "../../../assets/images/phone3-lg.svg";
import { ReactComponent as Phone3sm } from "../../../assets/images/phone3-sm.svg";
import { ReactComponent as Phone4lg } from "../../../assets/images/phone4-lg.svg";
import { ReactComponent as Phone4sm } from "../../../assets/images/phone4-sm.svg";
import Ellipse1 from "../../../assets/images/ellipse1.png";
import Ellipse2 from "../../../assets/images/ellipse2.png";
import Ellipse3 from "../../../assets/images/ellipse3.png";

const Onboard = styled.section`
  padding-top: 60px;

  & > div {
    position: relative;
    overflow: hidden;
  }

  .image {
    text-align: center;

    svg {
      max-width: 100%;
    }
  }

  .text {
    padding-inline: 16px;
  }

  .bottom-img {
    position: absolute;
    top: 80%;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  .step1 {
    .bottom-img {
      z-index: 1;
    }

    h2 {
      max-width: 15ch;
    }

    p {
      max-width: 50ch;
    }
  }

  .step2 {
    height: 680px;
    color: #fff;

    .text {
      padding-bottom: 200px;
      background-color: var(--clr-neutral-700);
    }

    .image {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }

    h2 {
      max-width: 23ch;
    }

    p {
      max-width: 30ch;
    }
  }

  .step3 {
    h2 {
      max-width: 18ch;
    }

    p {
      max-width: 60ch;
    }
  }

  .step4 {
    height: 650px;

    .text {
      padding-bottom: 100px;
      background-color: var(--clr-neutral-300);
    }

    .image {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }

    p {
      max-width: 35ch;
    }
  }

  @media only screen and (min-width: 50em) {
    padding-top: 120px;

    .step2 {
      height: 1350px;

      .text {
        padding-bottom: 300px;
      }
    }

    .step4 {
      height: 1200px;

      .text {
        padding-bottom: 250px;
      }
    }
  }
`;

const OnboardSection = ({ screenWidth }) => {
  return (
    <Onboard>
      <div className="step1">
        <div className="text">
          <SectionHeading>Get your package delivered with ease</SectionHeading>
          <Subtitle>
            Let’s connect you with the best credible and trusted rider in your
            vicinity, when needed. <strong>Bonus point:</strong> you get to
            monitor your ride progress.
          </Subtitle>
        </div>
        <div className="image">
          {screenWidth > 750 ? <Phone1lg /> : <Phone1sm />}
        </div>
        <img src={Ellipse1} alt="" className="bottom-img" />
      </div>
      <div className="step2">
        <div className="text">
          <SectionHeading>
            Manage your riders’ movement and earnings with ease
          </SectionHeading>
          <Subtitle>
            <strong>‘Rence Admin App</strong> will provide you with the best
            dispatch delivery management system.
          </Subtitle>
        </div>
        <div className="image">
          {screenWidth > 750 ? <Phone2lg /> : <Phone2sm />}
        </div>
      </div>
      <div className="step3">
        <div className="text">
          <SectionHeading>
            Divert Route Regardless of Delivery Location
          </SectionHeading>
          <Subtitle>
            <strong>‘Rence Rider App</strong> will connect you with another
            rider in your vicinity to transfer your delivery package to as a
            rider, in case you don’t want to continue on the route.
          </Subtitle>
        </div>
        <div className="image">
          {screenWidth > 750 ? <Phone3lg /> : <Phone3sm />}
        </div>
        <img src={Ellipse2} alt="" className="bottom-img" />
      </div>
      <div className="step4">
        <div className="text">
          <SectionHeading>Quit Lurking, Start Earning</SectionHeading>
          <Subtitle>
            <strong>‘Rence Rider App</strong> gives you the opportunity to make
            money anywhere, anytime, and from anyone
          </Subtitle>
        </div>
        <div className="image">
          {screenWidth > 750 ? <Phone4lg /> : <Phone4sm />}
        </div>
        <img src={Ellipse3} alt="" className="bottom-img" />
      </div>
    </Onboard>
  );
};

export default OnboardSection;
