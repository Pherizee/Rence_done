import styled from "styled-components";
import { IconBtn, PrimaryBtn } from "../../../components/styled/Button";
import { SectionHeading } from "../../../components/styled/Headings";
import Container from "../../../components/styled/Container";
import { HiOutlineArrowSmUp } from "react-icons/hi";

const productBenefits = [
  {
    id: 1,
    heading: "Access to a wide range of dispatch riders",
    description:
      "With “Rence, you don’t have to worry about not getting a rider when you need one.",
  },
  {
    id: 2,
    heading: "Real time tracking",
    description:
      "With “Rence, you don’t have to worry about not getting a rider when you need one.",
  },
  {
    id: 3,
    heading: "Multipoint delivery",
    description: "You can make more than one delivery per time",
  },
  {
    id: 4,
    heading: "In-App Calls & Chats",
    description:
      "You don’t have to incur additional cost on airtime purchase to be in constant communication with your rider.",
  },
  {
    id: 5,
    heading: "Express delivery",
    description: "Your delivery process does not always have to be slow",
  },
];

const WaitingList = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const benefitsTemplate = productBenefits.map((benefit) => {
    return (
      <Benefit key={benefit.id}>
        <div>
          <h3>{benefit.heading}</h3>
          <p>{benefit.description}</p>
        </div>
      </Benefit>
    );
  });

  return (
    <WaitingSection>
      <Container>
        <WaitingBg>
          <IconBtn
            width="60px"
            bRad={"50%"}
            bgClr={"#FF017D"}
            onClick={handleClick}
          >
            <HiOutlineArrowSmUp />
          </IconBtn>
          <SectionHeading fs={"var(--fs-500)"}>
            Join the waiting list for our senders app and be amongst the first
            to enjoy:
          </SectionHeading>
          <Benefits>
            {benefitsTemplate}
            <WaitingForm>
              <input type="text" placeholder="Your email address..." />
              <PrimaryBtn text={"Join now"} bRad={"1rem"} />
            </WaitingForm>
          </Benefits>
        </WaitingBg>
      </Container>
    </WaitingSection>
  );
};

export default WaitingList;

const WaitingBg = styled.div`
  position: relative;
  padding-block: 40px;
  padding-inline: 32px;
  border-radius: 88px 88px 0 0;
  background-color: #ff017d0d;

  & > button {
    position: absolute;
    top: -30px;
    right: 10%;

    svg {
      color: #fff;
      font-size: 40px;
    }
  }

  h2 {
    max-width: 35ch;
  }

  @media screen and (min-width: 50em) {
    padding-block: 90px;
  }
`;

const Benefits = styled.ul`
  position: relative;
  list-style: none;

  @media screen and (min-width: 50em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px 80px;
  }
`;

const WaitingSection = styled.section`
  padding-inline: 100px;

  @media screen and (max-width: 50em) {
    padding-inline: 0;

    & > div {
      width: 100%;
    }
  }
`;

const Benefit = styled.li`
  position: relative;
  width: calc(100% + 16px);
  margin-top: 3rem;
  padding: 1.5rem;
  box-shadow: 0px 16px 32px rgba(255, 1, 125, 0.05);

  &:nth-child(odd) {
    border-radius: 10px;
    background-color: #fff;
    translate: -20px 0;
  }

  &:nth-child(even) {
    color: #fff;
    background-color: #ff017d;
    translate: 4px 0;
  }

  h3 {
    font-size: var(--fs-400);
    margin-bottom: 0.8rem;
  }

  p {
    font-size: var(--fs-300);
  }

  @media screen and (min-width: 50em) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
    padding: 3rem;

    &:nth-child(odd) {
      translate: -64px 0;
    }

    &:nth-child(odd):first-child {
      translate: -64px 0;
    }

    &:nth-child(even) {
      translate: 48px 50%;
    }
  }
`;

const WaitingForm = styled.form`
  input {
    display: block;
    width: 100%;
    margin-top: 3rem;
    padding: 1rem 1.4rem;
    border: 2px solid #000;
    border-radius: 1rem;
    font-size: 1.5rem;
  }

  button {
    margin-top: 2rem;
  }

  @media screen and (min-width: 50em) {
    translate: 0 30%;
  }
`;
