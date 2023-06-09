import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";

import a1 from "./assets/sounds/a1.mp3";
import a2 from "./assets/sounds/a2.mp3";
import a3 from "./assets/sounds/a3.mp3";
import a4 from "./assets/sounds/a4.mp3";
import a5 from "./assets/sounds/a5.mp3";

interface IFlashcard {
  question: string;
  answer: string;
  pinyin: string;
  sound: string;
}

const flashcards: IFlashcard[] = [
  {
    question: "what is love? Baby don't hurt me.",
    answer: "爱是什么？宝贝，别伤害我",
    pinyin: "Ài shì shénme? Bǎobèi, bié shānghài wǒ.",
    sound: a1,
  },
  {
    question: "I don't speak Chinese. Why do you ask?",
    answer: "我不会说中文。 为什么你要问？",
    pinyin: " Wǒ bù huì shuō zhōngwén. Wèishéme nǐ yào wèn?",
    sound: a2,
  },
  {
    question: "Are you talking to me?",
    answer: "你在和我说话吗? Nǐ zài hé wǒ shuōhuà ma?",
    pinyin: "Nǐ zài hé wǒ shuōhuà ma?",
    sound: a3,
  },
  {
    question: "Wait a minute,you're is not my wife!",
    answer: "等一下，你不是我的妻子！",
    pinyin: "Děng yīxià, nǐ bùshì wǒ de qīzi!",
    sound: a4,
  },
  {
    question: "Does this smell like chloroform to you?",
    answer: "这闻起来像氯仿吗？",
    pinyin: "Zhè wén qǐlái xiàng lǜfǎng ma?",
    sound: a5,
  },
];

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNextCard = (): void => {
    //at the end of the array it starts back to the first card
    setCurrentIndex((currentIndex + 1) % flashcards.length);
  };

  const handlePrevCard = (): void => {
    //at the end of the array it starts back to the last card
    setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
  };

  const handleFlipSound = (): void => {
    const audio = new Audio(flashcards[currentIndex].sound);
    audio.play();
  };

  return (
    <div className="flashcard-app">
      <h1>Click on the card to see answer:</h1>
      <Flashcard
        question={flashcards[currentIndex].question}
        answer={flashcards[currentIndex].answer}
        pinyin={flashcards[currentIndex].pinyin}
        onFlip={handleFlipSound}
      />
      <div className="button-container">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

export default App;
