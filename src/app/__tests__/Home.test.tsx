import { render, screen } from '@testing-library/react';

import Home from '../page';

describe('Main template', () => {
  test('Render Home', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: /Boilerplate code/,
    });

    expect(heading).toBeInTheDocument();
  });
});
