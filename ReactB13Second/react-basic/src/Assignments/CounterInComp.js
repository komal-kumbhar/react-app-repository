import React, { useState } from 'react';

const CounterInComp = () => {
  // Initialize state for counter
  const [counter, setCounter] = useState(0);

  // Function to increase the counter
  const increaseCounter = () => {
    setCounter(counter + 1); // Update the counter state
  };

  return (
    <div>
      <h2>Simple Counter</h2>

      {/* Display the counter value */}
      <h2>{counter}</h2>

      {/* Button to increase the counter */}
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default CounterInComp;
