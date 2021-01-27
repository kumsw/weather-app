import React, { useState } from "react";
import styles from "./Input.module.css";
function Input({ setLocation }) {
  const [input, setInput] = useState("");
  return (
    <div className="input-container">
      <input
        className={styles.inputBox}
        type="text"
        placeholder="Enter a city.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className={styles.button} onClick={() => setLocation(input)}>
        Search
      </button>
    </div>
  );
}
export default Input;
