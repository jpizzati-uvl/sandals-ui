import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import { Lightbox } from './lightbox';

describe('Lightbox', () => {
  test('Renders Lightbox component', () => {
    render(
      <Lightbox handler={() => ''} visible>
        Test
      </Lightbox>
    );
  });

  test('Executes handler', () => {
    const handler = jest.fn();

    render(
      <Lightbox handler={handler} visible>
        Test
      </Lightbox>
    );
    fireEvent.click(screen.getByTestId('lightbox-ui'));
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
