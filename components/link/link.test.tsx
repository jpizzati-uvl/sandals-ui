import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Link } from './link';

describe('Link', () => {
  test('Renders Link component', () => {
    render(<Link href="#" />);
  });

  test('Anchor tag has href attribute', () => {
    render(<Link href="https://www.test.com/" />);
    expect(screen.getByTestId('link-ui').closest('a')?.href).toEqual(
      'https://www.test.com/'
    );
  });

  test('Executes onClick handler', () => {
    const handleClick = jest.fn();

    render(<Link href="#" onPress={handleClick} />);
    fireEvent.click(screen.getByTestId('link-ui'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
