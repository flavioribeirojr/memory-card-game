import React from 'react';
import useBoardState from './state';
import Card from '../card';
import VictoryMessage from '../victory-message';
import './Board.css';

function Board() {
  const { cards, flipCard, isGameWon, loadCards } = useBoardState();

  return (
    <div className="board">
      <VictoryMessage
        isVisible={isGameWon}
        onRequestToPlayAgain={loadCards}
      />
      {
        cards
          .map((card, index) => (
            <Card
              key={`card-${index}`}
              card={card}
              onCardClick={flipCard}
            />
          ))
      }
    </div>
  );
}

export default Board;