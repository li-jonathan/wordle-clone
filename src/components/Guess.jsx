import "../styles/Guess.css";
import { range } from "../utils/util";
import { checkGuess } from "../utils/game-logic";

const Guess = ({ guess, answer, final }) => {
  const checked = checkGuess(guess, answer);

  return (
    <div className="guess">
      {range(5).map((num) => (
        <div
          key={num}
          className={`guess-cell ${final ? checked[num].status : ""} ${
            checked?.[num]?.letter ? "filled" : ""
          }`}
        >
          {checked?.[num]?.letter ?? undefined}
        </div>
      ))}
    </div>
  );
};

export default Guess;
