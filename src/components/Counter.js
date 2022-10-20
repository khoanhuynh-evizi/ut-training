import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => setCounter(counter - 1)

  const reset = () => setCounter(0)

  const random = () => setCounter(Math.round(Math.random() * 100))

  const increment = () => setCounter(counter + 1)

  return (
    <div className='counter'>
      <h2>{counter}</h2>

      <button className="decrement" onClick={decrement}>-</button>
      <button className="reset" onClick={reset}>reset</button>
      <button className="random" onClick={random}>random</button>
      <button className="increment" onClick={increment}>+</button>

    </div>
  );
}

export default Counter