import { NUM_GUESSES } from "../utils/constants";
import { range } from "../utils/util";
import "../styles/Board.css";
import Guess from "./Guess";

const Board = ({ answer, guesses, moveIndex }) => {
  return (
    <div className="board">
      {range(NUM_GUESSES).map((num) => (
        <Guess
          key={num}
          guess={guesses[num]}
          answer={answer}
          final={num < moveIndex}
        />
      ))}
    </div>
  );
};

export default Board;
