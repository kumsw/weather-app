import React, { useState } from "react";

function Input({ setLocation }) {
  const [input, setInput] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter a city.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={() => setLocation(input)}>Search</button>
    </div>
  );
}
export default Input;
