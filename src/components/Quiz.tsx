import React, { useState } from 'react';
import Countdown from './Countdown';
import Alert from './Alert';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null | any>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showAlertCorrect, setShowAlertCorrect] = useState(false);
  const [showAlertIncorrect, setShowAlertIncorrect] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    checkAnswer(option)

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setShowAlertCorrect(false); // Hide alerts when moving to the next question
        setShowAlertIncorrect(false);

      } else {
        setShowScore(true);
      }
    }, 2000); // Delay for 3 seconds before moving to the next question
  };

  const checkAnswer = (option: string) => {
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setShowAlertCorrect(true);
    } else {
      setShowAlertIncorrect(true);
    }
  };

  return (
    <div className="quiz-container h-screen w-full max-w-3xl">
      {showScore ? (
        <div className="score-section text-2xl font-semibold dark:text-white text-gray-800">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <Countdown />

          {showAlertCorrect && (
            <Alert type="success" text="You got it correct! Good job! 🎉" />
          )}
          {showAlertIncorrect && (
            <Alert type="warning" text="You got it wrong! Try again! 🤔" />
          )}

          <div className="question-section shadow-lg bg-white dark:bg-gray-700 rounded-2xl p-4">
            <div className="question-text text-center my-6 text-2xl font-semibold dark:text-neutral-100 text-gray-600">
              {questions[currentQuestion].question}
            </div>
            <div className="option-container mt-4 grid grid-flow-row grid-cols-2 gap-1">
              {questions[currentQuestion].options.map((option: string, index: number) => (
                <button
                  key={index}
                  className={`option-button m-2 shadow-lg hover:bg-blue-600 bg-blue-500 px-4 py-3 rounded-xl mt-8 text-gray-100 ${
                    selectedOption === option ? 'selected' : ''
                  }`}
                  onClick={() => handleOptionClick(option)}>
                  {option}
                </button>
              ))}
            </div>
            <div className="text-center mt-6 text-neutral-400 dark:text-neutral-300 font-semibold text-lg">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
