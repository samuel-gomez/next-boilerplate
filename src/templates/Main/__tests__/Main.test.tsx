import { render, screen } from '@testing-library/react';
import React from 'react';

import Main from '..';

describe('Main', () => {
  test('Render Main', () => {
    render(
      <Main>
        <p>My child component</p>
      </Main>,
    );
    const heading = screen.getByText('My child component');

    expect(heading).toBeInTheDocument();
  });
});
