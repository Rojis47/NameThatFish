import "./styles/score-board.css";

export function FunctionalScoreBoard({
  availableFish,
  incorrectCount,
  correctCount,
}) {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {availableFish.map((fish) => (
          <div key={fish.name} className="choice">
            {fish.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
