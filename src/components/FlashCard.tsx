import React, { useState } from 'react';
import { colombianPhrases } from '@/colombian-phrases';
import Heading from './Heading';

const Flashcard = () => {
  function transformJsonToFlashcards(colombianPhrases: any) {
    const flashcardData: any = [];

    for (const key in colombianPhrases) {
      if (Object.hasOwnProperty.call(colombianPhrases, key)) {
        const value = colombianPhrases[key];
        flashcardData.push({ key, value });
      }
    }

    return flashcardData;
  }

  const flashcardData = transformJsonToFlashcards(colombianPhrases);

  const [showAnswer, setShowAnswer] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);

  const currentFlashcard = flashcardData[flashcardIndex];

  const handleShowAnswerClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleShowQuestionClick = () => {
    setShowAnswer(false);
  };

  const handleNextCardClick = () => {
    if (flashcardIndex < flashcardData.length - 1) {
      setFlashcardIndex(flashcardIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevCardClick = () => {
    if (flashcardIndex > 0) {
      setFlashcardIndex(flashcardIndex - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="flashcard bg-gray-200 text-gray-100 dark:bg-gray-700 rounded-xl p-4 py-12 shadow-xl">
      <div className="flashcard-content">
        <div className="flashcard-side">
          <div className='text-xl text-center font-bold px-2 text-gray-500 dark:text-gray-400 '>
              {showAnswer ? 'In Colombian Spanish this phrase means ...' : 'What does this phrase mean in English ?'}
          </div>
          <div className="flashcard-key text-center mb-12 mt-6 font-semibold text-2xl">
            <div className='text-neutral-700 dark:text-gray-100 lg:px-8'>
              {showAnswer ? `"${currentFlashcard.value}"` : `"${currentFlashcard.key}"` }
            </div>
          </div>
        </div>
        <div className="flashcard-side mx-auto">
          <div className="flashcard-button mx-auto grid grid-flow-row grid-cols-1 gap-3 mt-12">
            <button className="btn bg-gray-400 hover:bg-gray-500 hover:text-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 border-none text-gray-100 dark:text-neutral-100  whitespace-nowrap mb-6 tracking-wide leading-4" onClick={handleShowAnswerClick}>
              {showAnswer ? 'Show Question' : 'Show Answer'}
            </button>
          </div>
          <div className="w-full grid grid-cols-2 grid-rows-1 mt-12 justify-center items-center gap-10">
            <button className="btn border-none bg-blue-500 shadow-lg py-4 mt-3 text-gray-100 tracking-wide text-lg leading-4 hover:bg-blue-600" onClick={handlePrevCardClick}>
              Prev
            </button>
            <button className="btn bg-blue-500 border-none shadow-lg py-4 mt-3 text-gray-100 tracking-wide text-lg leading-4 hover:bg-blue-600" onClick={handleNextCardClick}>
              Next
            </button>
          </div>
          <div className="flashcard-number text-center mt-6 text-gray-500 dark:text-gray-300 font-semibold text-lg">
            Flashcard: {flashcardIndex + 1} of {flashcardData.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
