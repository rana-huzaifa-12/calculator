import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");

  // Function to handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clears the display
    } else if (value === "←") {
      setInput(input.slice(0, -1)); // Removes the last character
    } else {
      setInput(input + value); // Appends the clicked button to input
    }
  };

  return (

    <>
      <h1>Simple Calculator Using React</h1>


      <div className="calculator">


        <div className="display">{input || "0"}</div>

        <div className="buttons">

          <button className="operator" onClick={() => handleClick("C")}>C</button>
          <button className="operator" onClick={() => handleClick("←")}>←</button>
          <button className="operator" onClick={() => handleClick("%")}>%</button>
          <button className="operator" onClick={() => handleClick("/")}>÷</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>

          <button className="operator" onClick={() => handleClick("*")}>×</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>

          <button className="operator" onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>

          <button className="operator" onClick={() => handleClick("+")}>+</button>

          <button className="zero" onClick={() => handleClick("0")}>0</button>

          <button onClick={() => handleClick(".")}>.</button>

          <button className="equals" onClick={() => handleClick("=")}>=</button>

        </div>



      </div>

      <p>MADE WITH <span>&#10084;</span> BY <span>RANA HUZAIFA</span></p>

    </>
  );
}

export default App;
