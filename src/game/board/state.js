import { useState, useEffect, useCallback } from 'react';
import * as CardGenerator from '../card-generator';

export const gameLevels = {
  easy: 3,
  medium: 6
};

function useBoardState(level = gameLevels.easy) {
  const [ cards, setCards ] = useState([]);
  const selectedCards = cards.filter(card => card.selected && !card.discovered);
  const isGameWon = cards.length && cards.filter(card => card.discovered).length === cards.length;

  const loadCards = useCallback(() => {
    const cards = CardGenerator.generateDuplicatedCards(level);

    setCards(cards);
  }, [level]);

  useEffect(() => { loadCards() }, [loadCards]);

  useEffect(() => { checkSelectedCardsMatch(); });

  function flipCard(card) {
    if (hasTwoSelectedCards()) {
      return;
    }

    const cardsNextState = cards
      .map(currentCard => {
        if (currentCard.id !== card.id) {
          return currentCard;
        }

        currentCard.selected = !currentCard.selected;
        return currentCard;
      });

    setCards(cardsNextState);
  }

  function checkSelectedCardsMatch() {
    if (!hasTwoSelectedCards()) {
      return;
    }

    const [ firstSelectedCard, secondSelectedCard ] = selectedCards;

    if (firstSelectedCard.image !== secondSelectedCard.image) {
      return hideSelectedCards();
    }

    markSelectedCardsAsDiscovered();
  }

  function hasTwoSelectedCards() {
    return selectedCards.length === 2;
  }

  function hideSelectedCards() {
    const [ firstSelectedCard, secondSelectedCard ] = selectedCards;

    const cardsNextState = cards
      .map(card => {
        if (card.id !== firstSelectedCard.id && card.id !== secondSelectedCard.id) {
          return card;
        }

        card.selected = false;
        return card;
      });

    setTimeout(() => {
      setCards(cardsNextState);
    }, 800);
  }

  function markSelectedCardsAsDiscovered() {
    const [ firstSelectedCard, secondSelectedCard ] = selectedCards;

    const cardsNextState = cards
      .map(card => {
        if (card.id !== firstSelectedCard.id && card.id !== secondSelectedCard.id) {
          return card;
        }

        card.discovered = true;
        return card;
      });

    setCards(cardsNextState);
  }

  return {
    cards,
    isGameWon,
    flipCard,
    loadCards
  };
}

export default useBoardState;