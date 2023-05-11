import React, { useState } from "react";

const Flashcard = ({ flashcards, currentIndex }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const currentFlashcard = flashcards[currentIndex];

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container">
      <div
        className={`flashcard ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlipCard}
      >
        <div className="flashcard-front">
          <h2>{currentFlashcard.question}</h2>
        </div>
        <div className="flashcard-back">
          <h2>{currentFlashcard.answer}</h2>
          <h2>{currentFlashcard.pinyin}</h2>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
