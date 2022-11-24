import { SectionHeading } from "../../../components/styled/Headings";
import Container from "../../../components/styled/Container";
import Question from "./Question";
import styled from "styled-components";

const FAQs = () => {
  const questions = [
    {
      id: 1,
      title: "Facts and knowledge about COVID-19",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate perspiciatis vel quidem, est dolorem officia tenetur voluptates, aliquid corrupti omnis velit perferendis ipsam expedita quibusdam adipisci possimus iusto impedit?",
    },
    {
      id: 2,
      title: "For the public",
      answer:
        "You can’t make delivery outside Lagos for now, however, we will notify you when delivery outside Lagos gets available. You can’t make delivery outside Lagos for now, however, we will notify you when delivery outside Lagos gets available",
    },
    {
      id: 3,
      title: "Facts and knowledge about COVID-19",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate perspiciatis vel quidem, est dolorem officia tenetur voluptates, aliquid corrupti omnis velit perferendis ipsam expedita quibusdam adipisci possimus iusto impedit?",
    },
  ];

  const QuestionTemplate = questions.map((question) => (
    <Question key={question.id} question={question} />
  ));

  return (
    <FaqWrapper>
      <Container>
        <SectionHeading>FAQs</SectionHeading>
        <Questions>{QuestionTemplate}</Questions>
      </Container>
    </FaqWrapper>
  );
};

export default FAQs;

const FaqWrapper = styled.div`
  margin-top: 250px;
  margin-bottom: 100px;

  h2 {
    position: relative;
    width: max-content;
    margin-bottom: 100px;

    &::before {
      content: "?";
      position: absolute;
      top: 50%;
      right: -10px;
      color: #ff017d;
      font-size: 250px;
      font-weight: bold;
      translate: 50% -45%;
      z-index: -1;
    }
  }
`;

const Questions = styled.div``;
