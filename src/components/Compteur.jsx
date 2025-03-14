import React, { useState, useEffect } from 'react';
import "../App.css";

function Compteur() {
  const [initial, setInitial] = useState(0);
  const [incrementValue, setIncrement] = useState(1);
  const [decrementValue, setDecrement] = useState(1);
  const [count, setCount] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const increment = () => setCount(count + incrementValue);
  const decrement = () => setCount(count - decrementValue);

  const setInitialValue = (event) => {
    const value = Number(event.target.value);
    setInitial(value);
    setCount(value);
  };

  const setIncrementValue = (event) => setIncrement(Number(event.target.value));
  const setDecrementValue = (event) => setDecrement(Number(event.target.value));

  const reset = () => {
    setCount(0);
    setInitial(0);
    setIncrement(1);
    setDecrement(1);
  };

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>Valeur initiale :</p>
      <input type="number" value={initial} onChange={setInitialValue} />
      <p>Valeur d'incrémentation :</p>
      <input type="number" value={incrementValue} onChange={setIncrementValue} />
      <p>Valeur de décrémentation :</p>
      <input type="number" value={decrementValue} onChange={setDecrementValue} />
    </div>
  );
}

export default Compteur;