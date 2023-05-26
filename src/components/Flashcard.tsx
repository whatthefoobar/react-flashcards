import React, { useState, MouseEvent } from "react";
import "./Flashcard.css";

interface IFlashcardProps {
  question: string;
  answer: string;
  pinyin: string;
  sound: string;
  onFlip: () => void;
}

const Flashcard: React.FC<IFlashcardProps> = ({
  question,
  answer,
  pinyin,
  sound,
  onFlip,
}: IFlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlipCard = (): void => {
    setIsFlipped(!isFlipped);
  };

  const handleSoundClick = (e: MouseEvent<HTMLButtonElement>): void => {
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
