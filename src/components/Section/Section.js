import React, { useState } from "react";
export default function Section({ scoreRecord, header, questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [prevBtn, setPrevBtn] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    let newScore = score;
    if (scoreRecord[currentQuestion].score === 1) {
      if (isCorrect === false) {
        newScore -= 1;
      }
    } else {
      if (isCorrect) {
        newScore++;
      }
    }
    scoreRecord[currentQuestion].score = isCorrect ? 1 : 0;
    setScore(newScore);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length && nextQuestion > 0) {
      setPrevBtn(true);
    } else {
      setPrevBtn(false);
    }

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  // To handle the prev button

  const handlePrev = () => {
    if (currentQuestion > 0) {
      if (currentQuestion - 1 === 0) {
        setPrevBtn(false);
      }
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <>
          <div className='header'>
            <h2>{header}</h2>
          </div>
          <hr></hr>
          <div className='score-section'>You scored {score * 20}%</div>
        </>
      ) : (
        <>
          <div className='header'>
            {prevBtn && (
              <button className='prev' onClick={() => handlePrev()}>
                prev
              </button>
            )}
            <h2>{header}</h2>
          </div>
          <hr></hr>
          <div className='question-section'>
            <div className='question-count'>
              <span>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </span>
            </div>
            <div className='question-text'>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
