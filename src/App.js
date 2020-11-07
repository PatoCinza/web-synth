import React from 'react';
import logo from './assets/logo.svg'
import './App.css';
import { playCChord, playMajorScale, rollingInTheDeep } from 'synth/synth'

function App() {
  const playCMajorScale = playMajorScale;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <button onClick={playCChord}>C chord</button>
        <button onClick={playCMajorScale}>CMaj scale</button>
        <button onClick={rollingInTheDeep}>Adele</button>
      </main>
    </div>
  );
}

export default App;
