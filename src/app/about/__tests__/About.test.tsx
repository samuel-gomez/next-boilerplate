import { render, screen } from '@testing-library/react';

import About, { metadata } from '../page';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('About page', () => {
  describe('Render method', () => {
    it('should have two paragraphs of `Lorem ipsum`', () => {
      render(<About />);

      const paragraph = screen.getAllByText(/Lorem ipsum/);

      expect(paragraph).toHaveLength(2);
    });
  });
});

describe('About metadata', () => {
  it('should have metadata', async () => {
    expect(metadata).toEqual({
      title: 'About title',
      description: 'About description',
    });
  });
});
