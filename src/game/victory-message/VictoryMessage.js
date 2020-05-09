import React, { useState, useEffect } from 'react';
import FireworksGif from './images/fireworks.gif';
import './VictoryMessage.css';

function VictoryMessage({ isVisible, onRequestToPlayAgain }) {
  const [ showVictoryMessage, setVictoryMessageVisibility ] = useState(false);

  function changeVictoryMessageVivibility() {
    if (isVisible) {
      return setTimeout(() => {
        setVictoryMessageVisibility(true);
      }, 800);
    }

    setVictoryMessageVisibility(false);
  }

  useEffect(() => { changeVictoryMessageVivibility() });

  if (!showVictoryMessage) {
    return null;
  }

  return (
    <div className="game-victory-message" data-testid="victory-message">
      <h3 className="game-victory-message-title">
        Congratulations!
      </h3>
      <img
        src={FireworksGif}
        alt="Fireworks"
        className="game-victory-message-image"
      />
      <button 
        className="game-victory-message-button"
        onClick={onRequestToPlayAgain}
      >
        Play Again
      </button>
    </div>
  )
}

export default VictoryMessage;