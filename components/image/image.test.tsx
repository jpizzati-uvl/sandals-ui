import React from 'react';
import { render, screen } from '@testing-library/react';

import { Image } from './image';

describe('Image', () => {
  test('renders the Image component', () => {
    render(<Image alt="test" src="https://picsum.photos/200/300" />);
  });

  test('Image tag has data-attribute with src value', () => {
    render(<Image src="https://picsum.photos/200/300" alt="test" />);
    const dataAttribute = screen
      .getByTestId('image-ui')
      .getAttribute('data-resolvechain');

    expect(dataAttribute).toMatch(/(https:\/\/picsum.photos\/200\/300)/i);
  });
});
