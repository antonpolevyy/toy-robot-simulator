import React from 'react';
import { screen, render } from '@testing-library/react';
import TabletopGrid from './TabletopGrid';

test('TabletopGrid renders with the default position', () => {
  render(<TabletopGrid />);
  
  expect(screen.getByText('0x0')).toBeInTheDocument();
  expect(screen.getByText('0x0')).toHaveStyle('background-color: orange');
  expect(screen.getByText('0x0')).toHaveStyle('font-weight: bold');
});

test('TabletopGrid renders with a specific position', () => {
  render(<TabletopGrid position={{ x: 2, y: 3 }} />);
  
  expect(screen.getByText('2x3')).toBeInTheDocument();
  expect(screen.getByText('2x3')).toHaveStyle('background-color: orange');
  expect(screen.getByText('2x3')).toHaveStyle('font-weight: bold');
});
