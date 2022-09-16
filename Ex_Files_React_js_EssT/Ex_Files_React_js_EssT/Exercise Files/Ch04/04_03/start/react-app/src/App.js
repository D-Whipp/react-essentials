import './App.css';
import { useState, useEffect } from 'react';

function App({ library }) {
  const [emotion, setEmotion] = useState('happy');
  const [secondary, setSecondary] = useState('tired');

  useEffect(() => {
    console.log(`It's ${emotion} right now.`);
  }, [emotion]);
  console.log(emotion);

  useEffect(() => {
    console.log(`It's ${secondary} around here.`);
  }, [secondary]);
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>sad</button>
      <button onClick={() => setEmotion('excited')}>excited</button>
      <button onClick={() => setEmotion('joyous')}>joyous</button>
      <h2>Current energy level is {secondary}</h2>
      <button onClick={() => setSecondary('rested')}>rested</button>
      <button onClick={() => setSecondary('tired')}>tired</button>
    </div>
  );
}

export default App;
