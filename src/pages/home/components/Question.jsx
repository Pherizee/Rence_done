import { useEffect } from "react";
import { useState, useRef } from "react";
import { BsPlusLg } from "react-icons/bs";
import styled from "styled-components";

const Question = ({ question }) => {
  const [isOpen, setisOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState("");
  const [contentHeight, setContentHeight] = useState("");

  const content = useRef();
  const header = useRef();

  useEffect(() => {
    if (header) {
      setHeaderHeight(header.current.offsetHeight);
      setContentHeight(content.current.offsetHeight);
    }
  }, [header, isOpen]);

  const handleOpening = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <QuestionWrapper
      headerHeight={headerHeight}
      contentHeight={contentHeight}
      className={isOpen ? "open" : ""}
    >
      <header onClick={handleOpening} ref={header}>
        <BsPlusLg className={isOpen ? "open" : ""} />
        <h3>{question.title}</h3>
      </header>
      <div ref={content} className={`content ${isOpen ? "open" : ""}`}>
        <p>{question.answer}</p>
      </div>
    </QuestionWrapper>
  );
};

export default Question;

const QuestionWrapper = styled.div`
  position: relative;
  height: ${({ headerHeight }) => headerHeight + "px"};
  margin-bottom: 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
  transition: 300ms;

  &.open {
    height: ${({ headerHeight, contentHeight }) =>
      headerHeight + contentHeight + "px"};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
  }

  &:nth-child(odd) {
    background-color: #fed2170d;

    &::before {
      background-color: #fed217;
    }
  }

  &:nth-child(even) {
    background-color: #ff017d1a;

    &::before {
      background-color: #ff017d;
    }
  }

  header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding-block: 2rem;
    padding-inline: 1.3rem 1rem;
    cursor: pointer;
  }

  h3 {
    font-size: 20px;
  }

  p {
    padding-inline: 1.3rem 1rem;
    padding-bottom: 2rem;
    line-height: 2;
  }

  svg {
    transform-origin: center center;
    transition: 300ms ease;
    font-size: 26px;
    color: #000;

    &.open {
      rotate: 45deg;
    }
  }

  .content {
    transform-origin: 0 0;
    transform: scaleY(0);
    transition: 300ms;

    &.open {
      transform: scaleY(1);
    }
  }

  @media screen and (min-width: 50em) {
    width: 60%;
    margin-inline: auto;

    &.open header {
      padding-block: 30px;
    }

    header {
      padding-block: 50px;
      gap: 2rem;
    }

    p {
      margin-left: 4rem;
      padding-right: 2rem;
      padding-bottom: 3rem;
    }
  }
`;
