import "./App.css";
import { pickRandomWord } from "./utils/game-logic";
import Game from "./components/Game";

function App() {
  const answer = pickRandomWord();
  console.log({ answer });

  return (
    <div className="app">
      <header className="header">
        <h1>Wordle Clone</h1>
      </header>
      <Game answer={answer} />
    </div>
  );
}

export default App;
