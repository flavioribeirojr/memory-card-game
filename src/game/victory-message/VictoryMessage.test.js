import React from 'react';
import { render } from '@testing-library/react';
import VictoryMessage from './VictoryMessage';

describe('VictoryMessage', function () {
  test('it must display nothing if isVisible is false', function () {
    const { queryAllByTestId } = render(<VictoryMessage isVisible={false} />);

    expect(queryAllByTestId('victory-message').length).toBe(0);
  });

  test('it must display the victory message if isVisible is true', function () {
    const { queryAllByTestId } = render(<VictoryMessage isVisible />);

    setTimeout(() => {
      expect(queryAllByTestId('victory-message').length).toBe(1);
    }, 800);
  });
});