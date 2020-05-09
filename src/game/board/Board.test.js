import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as CardGenerator from '../card-generator';
import Board from './Board';

jest.mock('../card-generator', () => ({
  generateDuplicatedCards: () => [
    {
      id: 1,
      image: 'image-1',
      selected: false,
      discovered: false
    },
    {
      id: 2,
      image: 'image-2',
      selected: false,
      discovered: false
    },
    {
      id: 3,
      image: 'image-1',
      selected: false,
      discovered: false
    },
    {
      id: 4,
      image: 'image-2',
      selected: false,
      discovered: false
    }
  ]
}));

describe('Board', function () {
  test('it must render without crashing', function () {
    render(<Board />);
  });

  test('it must flip the card when it is clicked', function () {
    const { getAllByTestId } = render(<Board />);
    
    const cards = getAllByTestId('card-container');
    fireEvent.click(cards[0]);

    expect(cards[0].className.includes('flipped')).toBe(false);
  });

  test('it must hide the cards selected when two wrong choices are made', function () {
    const { getAllByTestId } = render(<Board />);

    const cards = getAllByTestId('card-container');
    fireEvent.click(cards[0]);
    fireEvent.click(cards[1]);

    setTimeout(() => {
      expect(cards[0].className.includes('flipped')).toBe(true);
      expect(cards[1].className.includes('flipped')).toBe(true);
    }, 800);
  });

  test('it must keep the cards displayed if they are a match', function () {
    const { getAllByTestId } = render(<Board />);

    const cards = getAllByTestId('card-container');
    fireEvent.click(cards[0]);
    fireEvent.click(cards[2]);

    setTimeout(() => {
      expect(cards[0].className.includes('flipped')).toBe(false);
      expect(cards[2].className.includes('flipped')).toBe(false);
    }, 800);
  });
});