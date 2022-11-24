import { SectionHeading } from "../../../components/styled/Headings";
import Container from "../../../components/styled/Container";
import World from "../../../assets/images/world-map 1.png";
import styled from "styled-components";

const Drive = () => {
  return (
    <DriveContainer>
      <Container>
        <SectionHeading style={{ color: "#fff" }}>
          What drives us?
        </SectionHeading>
        <Statements>
          <Statement>
            <h3>Vision</h3>
            <p>
              Our vision is to achieve a smooth transition of packages between
              the sender, rider and receiver with no hassle
            </p>
          </Statement>
          <Statement>
            <h3>Mission</h3>
            <p>
              Leveraging on technology to connect senders and receivers of
              parcels to the best rider available, ensuring a smooth
              communication flow between the three entities in question and
              providing them with the best possible customer service and
              experience all the way
            </p>
          </Statement>
        </Statements>
      </Container>
    </DriveContainer>
  );
};

export default Drive;

const DriveContainer = styled.section`
  padding-block: 5rem;
  background-image: url(${World});
  background-repeat: no-repeat;
  background-color: #222;
  background-position: center center;
  background-size: contain;
`;

const Statements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  @media screen and (max-width: 50em) {
    flex-direction: column;
  }
`;

const Statement = styled.div`
  position: relative;
  width: 35%;
  padding: 4rem;
  border-radius: 20px;
  background-color: #f6f4f3;

  h3 {
    position: absolute;
    top: -2rem;
    left: 50%;
    width: max-content;
    padding: 1rem 2rem;
    border-radius: 10px;
    font-size: var(--fs-400);
    color: #fff;
    translate: -50% 0;
  }

  &:nth-child(1) {
    h3 {
      background-color: #fed217;
    }
  }

  &:nth-child(2) {
    h3 {
      background-color: #ff017d;
    }
  }

  @media screen and (max-width: 50em) {
    width: 100%;
    padding: 3rem 2rem;

    &:nth-child(1) {
      margin-bottom: 5rem;
    }
  }
`;
