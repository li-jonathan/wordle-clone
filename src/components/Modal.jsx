import "../styles/Modal.css";
import { X } from "lucide-react";

export const Modal = ({ answer, gameStatus, handleDismiss }) => {
  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={handleDismiss} />
      <div className="content">
        <button className="close-button" onClick={handleDismiss}>
          <X />
        </button>
        <div className="message">
          {gameStatus === "won" ? (
            <>
              <h2>Congratulations!</h2>
              <p>You guessed the word</p>
            </>
          ) : (
            <>
              <h2>Game Over!</h2>
              <p>The word was: {answer}</p>
            </>
          )}
        </div>
        <button
          className="play-again-button"
          onClick={() => window.location.reload()}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
