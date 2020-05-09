import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

const cardMock = {
  id: 1,
  image: 'https://i.picsum.photos/id/377/200/300.jpg'
};

describe('Card', function () {
  test('it must render without crashing', function () {
    render(<Card card={cardMock} />);
  });

  test('it must display an image', function () {
    const { getByTestId } = render(<Card card={cardMock} />);

    const image = getByTestId('card-image');

    expect(image).toBeTruthy();
  });

  test('it must "flip" the card to when receiving hidden value from props', function () {
    const { queryByTestId } = render(<Card card={cardMock} hidden />);

    const card = queryByTestId('card-container');

    expect(card.className.includes('flipped')).toBe(true)
  });
});