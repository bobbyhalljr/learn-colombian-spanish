import React, { useState } from 'react';
import { colombianPhrases } from '@/colombian-phrases';

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
    console.log(flashcardData);

    const [showAnswer, setShowAnswer] = useState(false);
    const [flashcardIndex, setFlashcardIndex] = useState(0);

    const currentFlashcard = flashcardData[flashcardIndex];


    const handleShowAnswerClick = () => {
        setShowAnswer(true);
    };

    const handleShowQuestionClick = () => {
        setShowAnswer(false);
    };

    const handleNextCardClick = () => {
        setShowAnswer(false);
        // Choose a random flashcard for the next question
        const newIndex = Math.floor(Math.random() * flashcardData.length);
        setFlashcardIndex(newIndex);
    };

    return (
        <div className="flashcard bg-white rounded-xl mx-4 mt-12 p-4 w-[90%] py-12 shadow-xl">
            <div className="flashcard-content">
                <div className="flashcard-side">
                    <div className='text-2xl font-bold'>{showAnswer ? "Answer" : "Question"}</div>
                    <div className="flashcard-key mt-6 text-gray-600 font-semibold text-lg">{showAnswer ? currentFlashcard.value : currentFlashcard.key}</div>
                </div>
                <div className="flashcard-side mx-auto">
                    <div className="flashcard-button w-full flex flex-col items-evenly justify-center mt-12">
                        <button className='btn bg-blue-500 mb-6 text-gray-100 hover:bg-blue-600' onClick={handleNextCardClick}>Next</button>
                        <button className='btn bg-blue-500 mb-6 text-gray-100 hover:bg-blue-600' onClick={handleShowAnswerClick}>Show Answer</button>
                        <button className='btn bg-blue-500 mb-6 text-gray-100 hover:bg-blue-600' onClick={handleShowQuestionClick}>Show Question</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashcard;
