import React from 'react'
import useCounter from './hooks/useCounter';

const CounterApp = () => {

    const [counter, increment, reset] = useCounter(5);

    return (
      <div>
        <h1>Click: {counter}</h1>
        <button onClick={increment}>Incremento</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
}

export default CounterApp
