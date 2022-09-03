import styled from "styled-components";
import Container from "../../../components/styled/Container";
import { SectionHeading, Subtitle } from "../../../components/styled/Headings";

const Onboard = styled.section`
  padding-top: 60px;

  @media only screen and (min-width: 50em) {
    padding-top: 96px;
  }
`;

const OnboardSection = () => {
  return (
    <Onboard>
      <div className="step1">
        <Container>
          <SectionHeading>Get your package delivered with ease</SectionHeading>
          <Subtitle>
            Let’s connect you with the best credible and trusted rider in your
            vicinity, when needed. <strong>Bonus point:</strong> you get to
            monitor your ride progress.
          </Subtitle>
        </Container>
      </div>
    </Onboard>
  );
};

export default OnboardSection;
