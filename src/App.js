import './App.css';
import React, { useState } from 'react';

function App() {
  const [countLucas, setCountLucas] = useState(0);
  const [countQuantin, setCountQuantin] = useState(0);
  const [countRobin, setCountRobin] = useState(0);
  const [countVictor, setCountVictor] = useState(0);
  const [countSacha, setCountSacha] = useState(0);

  const checkAlcoholic = (name, count) => {
    if (count === 10) {
      alert(`${name} est un alcoolique !`);
    }
  };

  const increment = (name, count, setter) => {
    const newCount = count + 1;
    setter(newCount);
    checkAlcoholic(name, newCount);
  };

  const decrement = (name, count, setter) => {
    const newCount = count - 1;
    setter(newCount);
    checkAlcoholic(name, newCount);
  };

  return (
    <div className="App">
      <h1>Compteurs de bières 🍺 :</h1>
      
      <h2>Lucas : {countLucas}</h2>
      <button className="button-54" onClick={() => increment("Lucas", countLucas, setCountLucas)}>+ 1</button>
      <button className="button-54" onClick={() => decrement("Lucas", countLucas, setCountLucas)}>- 1</button>

      <h2>Quantin : {countQuantin}</h2>
      <button className="button-54" onClick={() => increment("Quantin", countQuantin, setCountQuantin)}>+ 1</button>
      <button className="button-54" onClick={() => decrement("Quantin", countQuantin, setCountQuantin)}>- 1</button>

      <h2>Robin : {countRobin}</h2>
      <button className="button-54" onClick={() => increment("Robin", countRobin, setCountRobin)}>+ 1</button>
      <button className="button-54" onClick={() => decrement("Robin", countRobin, setCountRobin)}>- 1</button>

      <h2>Victor : {countVictor}</h2>
      <button className="button-54" onClick={() => increment("Victor", countVictor, setCountVictor)}>+ 1</button>
      <button className="button-54" onClick={() => decrement("Victor", countVictor, setCountVictor)}>- 1</button>

      <h2>Sacha : {countSacha}</h2>
      <button className="button-54" onClick={() => increment("Sacha", countSacha, setCountSacha)}>+ 1</button>
      <button className="button-54" onClick={() => decrement("Sacha", countSacha, setCountSacha)}>- 1</button>
    </div>
  );
}

export default App;
