import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import Board from "./Board";
import { useWordle } from "../hooks/useWordle";
import { Modal } from "./Modal";

const Game = ({ answer }) => {
  const { gameStatus, guesses, moveIndex, handleKeyUp } = useWordle(answer);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    if (gameStatus !== "playing") {
      window.removeEventListener("keyup", handleKeyUp);
    }

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [gameStatus, handleKeyUp]);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (gameStatus !== "playing") {
      setShowModal(true);
    }
  }, [gameStatus])

  return (
    <div className="game-wrapper">
      {showModal && <Modal answer={answer} gameStatus={gameStatus} handleDismiss={() => setShowModal(false)}/>}
      <Board answer={answer} guesses={guesses} moveIndex={moveIndex} />
      <Keyboard />
    </div>
  );
};

export default Game;
