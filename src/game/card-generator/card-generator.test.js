import { generateCards } from './card-generator';

describe('Card Generator', function () {
  it('Must generate an array based on the length provided', function () {
    const cards = generateCards(3);

    expect(cards.length).toBe(3);
  });

  it('Must generate an array of cards', function () {
    const [ firstCardElement ] = generateCards(1);

    expect(typeof firstCardElement).toBe('object');
  });

  it('Must generate an array of unique numbers', function () {
    const cards = generateCards(20);
    const cardsSet = new Set(cards);

    expect(cardsSet.size).toBe(cards.length);
  });
});