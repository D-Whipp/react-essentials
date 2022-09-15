import './App.css';
import { useState } from 'react';

function App({ library }) {
  const [emotion, setEmotion] = useState('happy');
  console.log(emotion);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>sad</button>
      <button onClick={() => setEmotion('excited')}>excited</button>
      <button onClick={() => setEmotion('joyous')}>joyous</button>
    </div>
  );
}

export default App;
