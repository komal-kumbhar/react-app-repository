import React, { useState } from 'react';

const AddNumInComp = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(null);

  const handleCalculate = () => {
    // Parse the numbers and calculate the sum
    const calculatedSum = parseFloat(num1) + parseFloat(num2);
    setSum(calculatedSum); // Update the state with the sum
  };

  return (
    <div>
      <h3>Add Two Numbers</h3>

      <div>
        <input
          type="number"
          id="number1"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          id="number2"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <button onClick={handleCalculate}>Calculate Sum</button>

      {sum !== null && <div id="result">Sum: {sum}</div>}
    </div>
  );
};

export default AddNumInComp;
