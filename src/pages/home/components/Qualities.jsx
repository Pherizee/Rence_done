import styled from "styled-components";
import { SectionHeading, Subtitle } from "../../../components/styled/Headings";
import Container from "../../../components/styled/Container";
import Assurance from "../../../assets/images/assurance.png";

const Qualities = () => {
  return (
    <QualitiesWrapper>
      <Container>
        <SectionHeading>‘Rence Rider, Smooth Qualities</SectionHeading>
        <Subtitle style={{ marginBottom: "4rem" }}>
          Enjoy the convenience of getting a better experience
        </Subtitle>
        <QualitiesGroup>
          <div>
            <h3>Integrity</h3>
            <p>
              Smooth riders must be of integrity, by ensuring that they carry
              out transactions with the senders truthfully, making sure that the
              agreement (Such as Timing and Payment agreement) they have with
              senders is being followed to the latter.
            </p>
          </div>
          <div>
            <h3>Respect & Regard</h3>
            <p>
              Smooth riders must ensure they show respect and regard to all
              stakeholders - Senders and Receivers. Remember that the customer
              is still king
            </p>
          </div>
          <div>
            <h3>Security & Care</h3>
            <p>
              Smooth riders must ensure that stakeholder’s information and
              package must be secure and handled with care at all times.
            </p>
          </div>
        </QualitiesGroup>
      </Container>
    </QualitiesWrapper>
  );
};

export default Qualities;

const QualitiesWrapper = styled.section`
  padding-top: 100px;
  background-color: #f2eae8;
`;

const QualitiesGroup = styled.div`
  & > div {
    margin-bottom: 1.5rem;
    padding: 4rem 2rem;
    background-color: #fff;

    &:hover {
      scale: 1.08;
      transition: 300ms;
      box-shadow: 4.94003px 16.3021px 38.0383px -11.3621px rgba(0, 0, 0, 0.3);
    }

    &::before {
      content: "";
      position: absolute;
      top: -25px;
      left: 50%;
      width: 50px;
      height: 50px;
      background-image: url(${Assurance});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      transform: translateX(-50%);
    }
  }

  h3 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: var(--fs-500);
  }

  p {
    text-align: center;
    font-weight: 400;
  }

  @media screen and (min-width: 50em) {
    display: flex;

    & > div {
      width: 33%;
      margin-bottom: 0;
    }
  }
`;
