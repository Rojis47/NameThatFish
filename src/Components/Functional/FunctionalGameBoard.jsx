import "./styles/game-board.css";

export const FunctionalGameBoard = ({
  setUserInput,
  userInput,
  nextFishToName,
  removeFish,
  handleAnswer,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer();
    removeFish();
    setUserInput("");
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form onSubmit={handleSubmit} id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          type="text"
          name="fish-guess"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
