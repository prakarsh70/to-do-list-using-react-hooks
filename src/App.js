import React, { useState } from "react";
import "./style.css";
import Input from "./input.js";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <p>{input}</p>
      <Input input={input} setInput={setInput} />
    </div>
  );
};
export default App;
