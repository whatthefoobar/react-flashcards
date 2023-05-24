import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ question, answer, pinyin, sound, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSoundClick = (e) => {
    e.stopPropagation();
    onFlip();
  };

  return (
    <div className="container">
      <div className="flashcard-container">
        <div
          className={`flashcard ${isFlipped ? "flipped" : ""}`}
          onClick={handleFlipCard}
        >
          <figure className="flashcard-front">
            <h2>{question}</h2>
          </figure>
          <figure className="flashcard-back">
            <button className="soundBtn hidden" onClick={handleSoundClick}>
              <i className="fas fa-volume-down"></i>
            </button>
            <h2>{answer}</h2>
            <h2>{pinyin}</h2>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
