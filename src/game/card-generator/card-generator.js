import CardImages from './images';

function generateCards(cardsNumber) {
  const cards = new Set();

  while(cards.size < cardsNumber) {
    const randomNumber = Math.floor(Math.random() * cardsNumber);

    cards.add(randomNumber);
  }

  return [...cards].map(createCardFromNumber);
}

function generateDuplicatedCards(cardsNumber) {
  const firstSetOfCards = generateCards(cardsNumber);
  const secondSetOfCards = generateCards(cardsNumber);
  const mergedCards = [
    ...firstSetOfCards,
    ...secondSetOfCards
  ];

  return mergedCards.sort(() => Math.random() - 0.5);
}

function createCardFromNumber(cardNumber) {
  return {
    id: Math.random().toString(36).substr(2, 9),
    image: CardImages[cardNumber],
    selected: false,
    discovered: false
  };
}

export {
  generateCards,
  generateDuplicatedCards
}