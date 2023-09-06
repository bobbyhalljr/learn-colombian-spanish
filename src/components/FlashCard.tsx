import React, { useState } from 'react';
import { colombianPhrases } from '@/colombian-phrases';
import Heading from './Heading';

const Flashcard = () => {
  function transformJsonToFlashcards(colombianPhrases: any) {
    const flashcardData = [];

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
    <div className="">
      <Heading>Flash Cards</Heading>
      <div className="flashcard bg-white rounded-xl mt-12 p-4 w-full py-12 shadow-xl">
        <div className="flashcard-content">
          <div className="flashcard-side">
            <div className='text-xl text-center font-bold text-neutral-400'>
                {showAnswer ? 'In Colombian Spanish this phrase means ...' : 'What does this phrase mean in English ?'}
            </div>
            <div className="flashcard-key text-center mb-12 mt-6 font-semibold text-2xl">
              <div className='text-neutral-700 px-4 lg:px-8'>
                {showAnswer ? `"${currentFlashcard.value}"` : `"${currentFlashcard.key}"` }
              </div>
            </div>
          </div>
          <div className="flashcard-side mx-auto">
            <div className="flashcard-button w-2/3 mx-auto grid grid-flow-row grid-cols-1 gap-3 mt-12">
              <button className="btn btn-outline whitespace-nowrap mb-6 tracking-wide leading-4" onClick={handleShowAnswerClick}>
                {showAnswer ? 'Show Question' : 'Show Answer'}
              </button>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-1 mt-12 justify-center items-center gap-10">
              <button className="btn bg-blue-500 shadow-lg py-4 mt-3 text-gray-100 tracking-wide text-lg leading-4 hover:bg-blue-600" onClick={handlePrevCardClick}>
                Prev
              </button>
              <button className="btn bg-blue-500 shadow-lg py-4 mt-3 text-gray-100 tracking-wide text-lg leading-4 hover:bg-blue-600" onClick={handleNextCardClick}>
                Next
              </button>
            </div>
            <div className="flashcard-number text-center mt-6 text-neutral-400 font-semibold text-lg">
              Flashcard: {flashcardIndex + 1} of {flashcardData.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
