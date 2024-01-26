import React, { useState } from "react";

export default function Homepage() {
  const [displayValue, setDisplayValue] = useState("");

  const calculateResult = (method) => {
    try {
      const result = new Function(`return ${method}`)();
      console.log(result);
      return result.toString();
    } catch (error) {
      return "Nhập phép tính hợp lệ";
    }
  };

  const handleButton = (value) => {
    if (value === "=") {
      setDisplayValue(calculateResult(displayValue));
    } else if (value === "C") {
      setDisplayValue("");
    } else {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };
  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <button onClick={() => handleButton("7")}>7</button>
      <button onClick={() => handleButton("8")}>8</button>
      <button onClick={() => handleButton("9")}>9</button>
      <button onClick={() => handleButton("/")}>/</button>
      <button onClick={() => handleButton("4")}>4</button>
      <button onClick={() => handleButton("5")}>5</button>
      <button onClick={() => handleButton("6")}>6</button>
      <button onClick={() => handleButton("*")}>*</button>
      <button onClick={() => handleButton("1")}>1</button>
      <button onClick={() => handleButton("2")}>2</button>
      <button onClick={() => handleButton("3")}>3</button>
      <button onClick={() => handleButton("-")}>-</button>
      <button onClick={() => handleButton("0")}>0</button>
      <button className="operator equal" onClick={() => handleButton("=")}>
        =
      </button>
      <button onClick={() => handleButton("C")}>C</button>
      <button className="operator plus" onClick={() => handleButton("+")}>
        +
      </button>
    </div>
  );
}
