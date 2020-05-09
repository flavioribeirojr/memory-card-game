import React from 'react';
import GHLogo from './images/gh.png';
import './Card.css';

function Card({ card, onCardClick }) {
  const hidden = !card.selected && !card.discovered;

  function onWrappedClick() {
    onCardClick(card);
  }

  return (
    <div
      data-testid="card-container"
      className={`card ${hidden ? 'flipped' : ''}`}
      onClick={onWrappedClick}
    >
      <div className="card-inner">
        <img
          className="card-image"
          data-testid="card-image"
          src={card.image}
          alt=""
        />
        <div className="card-back">
          <img
            src={GHLogo}
            className="card-back-image"
            alt="Card back"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;