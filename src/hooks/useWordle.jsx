import { useState } from "react";

export const useWordle = (answer) => {
  const [gameStatus, setGameStatus] = useState("playing"); // playing | won | lost
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [moveIndex, setMoveIndex] = useState(0);

  const handleKeyUp = ({ key }) => {
    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        alert("Guess must be 5 letters long.");
        return;
      }

      const updatedGuesses = [...guesses.slice(0, moveIndex), currentGuess];
      setGuesses(updatedGuesses);
      setCurrentGuess("");
      setMoveIndex(moveIndex + 1);

      if (currentGuess === answer) {
        setGameStatus("won");
      } else if (updatedGuesses.length > 5) {
        setGameStatus("lost");
      }
    }

    if (key === "Backspace") {
      const updatedGuess = currentGuess.slice(0, -1);
      setCurrentGuess(updatedGuess);
      setGuesses([...guesses.slice(0, moveIndex), updatedGuess]);
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        const newGuess = currentGuess + key.toUpperCase();
        setCurrentGuess(newGuess);
        setGuesses([...guesses.slice(0, moveIndex), newGuess]);
      }
    }
  };

  return {
    gameStatus,
    guesses,
    currentGuess,
    moveIndex,
    handleKeyUp,
  };
};
