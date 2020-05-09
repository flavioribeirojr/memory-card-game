import React from 'react';
import Game from './game';
import './App.css';

function App() {
  return (
    <main className="memory-card-game">
      <h1 className="memory-card-game-title">
        Memory Card Game
      </h1>
      <Game />
    </main>
  );
}

export default App;
