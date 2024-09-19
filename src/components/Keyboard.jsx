import "../styles/Keyboard.css";

import { range } from "../utils/util";

const KEYBOARD_ROW_1 = "qwertyuiop";
const KEYBOARD_ROW_2 = "asdfghjkl";
const KEYBOARD_ROW_3 = "zxcvbnm";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {range(KEYBOARD_ROW_1.length).map((num) => (
          <div key={`kb-row-1-${num}`} className="keyboard-key">
            {KEYBOARD_ROW_1.charAt(num)}
          </div>
        ))}
      </div>
      <div className="keyboard-row">
        <div className="keyboard-key-spacer" />
        {range(KEYBOARD_ROW_2.length).map((num) => (
          <div key={`kb-row-2-${num}`} className="keyboard-key">
            {KEYBOARD_ROW_2.charAt(num)}
          </div>
        ))}
        <div className="keyboard-key-spacer" />
      </div>
      <div className="keyboard-row">
        <div className="keyboard-key keyboard-key-word">ENTER</div>
        {range(KEYBOARD_ROW_3.length).map((num) => (
          <div key={`kb-row-3-${num}`} className="keyboard-key">
            {KEYBOARD_ROW_3.charAt(num)}
          </div>
        ))}
        <div className="keyboard-key keyboard-key-icon">{"\u232B"}</div>
      </div>
    </div>
  );
};

export default Keyboard;
