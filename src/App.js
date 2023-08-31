import { useState } from 'react';
import { useCounter } from './componenets/useCounter';
import './App.css';

function App() {
  const {counter,increaseCounter,decreaseCounter,restartCounter} = useCounter(0)


  return (
    <div className='App'>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={restartCounter}>Set to 0</button>

      <p>{counter}</p>
    </div>
  )
}

export default App;
