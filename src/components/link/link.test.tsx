import React from 'react';
import { render } from '@testing-library/react';

import Link from './link';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Link href="#" label="Hello world!" />);
  });
});
