import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1)

  const decrement = () => setCounter(counter - 1)

  const reset = () => setCounter(0)

  return (
    <div className='counter'>
      <h2>{counter}</h2>

      <button className="increment" onClick={increment}>+</button>
      <button className="reset" onClick={reset}>reset</button>
      <button className="decrement" onClick={decrement}>-</button>
    </div>
  );
}

export default Counter