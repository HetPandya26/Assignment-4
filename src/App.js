import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./App.css";
const App = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div id="part">
      <h1>Dropdown Component Example</h1>
      <div>
        <span>Select an option:</span>
        <Dropdown options={options} value={selectedOption} onChange={handleOptionChange} />
      </div>
      <div>
        <p>Selected Option: {selectedOption}</p>
      </div>
    </div>
  );
};

export default App;
