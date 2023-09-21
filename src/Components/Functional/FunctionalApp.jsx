import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

let correctCount = 0;
let incorrectCount = 0;

export function FunctionalApp() {
  const [userInput, setUserInput] = useState("");
  const [availableFish, setAvailableFish] = useState(initialFishes);

  const nextFishToName = availableFish[0];

  const removeFish = () => {
    setAvailableFish((prevFish) =>
      prevFish.filter((fish) => fish.name !== nextFishToName.name)
    );
  };

  const handleAnswer = () => {
    userInput === nextFishToName.name ? correctCount++ : incorrectCount++;
  };

  return (
    <>
      {availableFish.length ? (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            handleAnswer={handleAnswer}
            nextFishToName={nextFishToName}
            availableFish={availableFish}
          />
          <FunctionalGameBoard
            handleAnswer={handleAnswer}
            nextFishToName={nextFishToName}
            userInput={userInput}
            setUserInput={setUserInput}
            removeFish={removeFish}
          />
        </>
      ) : (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
