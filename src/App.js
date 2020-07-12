import React, { useState } from "react";
import "./App.css";
import * as math from "mathjs";

// Components
import Input from './components/Input';
import Button from './components/Button';
import ClearButton from './components/ClearButton';

function App() {
  const [input, setInput] = useState("");
  const addToInput = (val) => setInput((prevState) => (prevState + val));
  const handleEqual = () => setInput(math.evaluate(input));

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input input={input} />
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>.</Button>
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={() => handleEqual()}>=</Button>
          <Button handleClick={addToInput}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
