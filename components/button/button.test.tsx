import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  test('Renders Button component', () => {
    render(<Button onPress={() => console.log('button')} />);
  });

  test('Executes onClick handler', () => {
    const handlePress = jest.fn();

    render(<Button onPress={handlePress} />);
    fireEvent.click(screen.getByTestId('button-ui'));
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
