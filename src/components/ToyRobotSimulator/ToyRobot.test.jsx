import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToyRobot from './ToyRobot'; // Adjust the path accordingly
import { MOVE_BUTTONS } from '../../constants/constValues';

test('ToyRobot component renders correctly', () => {
  render(<ToyRobot />);

  // Check if the main components are present
  expect(screen.getByText('Toy Robot Simulator')).toBeInTheDocument();
  expect(screen.getByTestId('tabletop-wrapper')).toBeInTheDocument();
  expect(screen.getByTestId('status-form-wrapper')).toBeInTheDocument();
});

test('ToyRobot updates position on arrow key press', () => {
  render(<ToyRobot />);

  // Assuming initial position is 0 x 0
  expect(screen.getByText('Status: 0 x 0')).toBeInTheDocument();
  // Simulate arrow key press
  fireEvent.keyDown(document, { key: 'ArrowDown' });
  // Check if the position is updated
  expect(screen.getByText('Status: 0 x 1')).toBeInTheDocument();
});

test('ToyRobot updates position on direction button click', () => {
  render(<ToyRobot />);

  // Assuming initial position is 0 x 0
  expect(screen.getByText('Status: 0 x 0')).toBeInTheDocument();

  // Click the directional buttons and check if positions are updated
  fireEvent.click(screen.getByText(MOVE_BUTTONS.DOWN));
  expect(screen.getByText('Status: 0 x 1')).toBeInTheDocument();
  fireEvent.click(screen.getByText(MOVE_BUTTONS.RIGHT));
  expect(screen.getByText('Status: 1 x 1')).toBeInTheDocument();
  fireEvent.click(screen.getByText(MOVE_BUTTONS.UP));
  expect(screen.getByText('Status: 1 x 0')).toBeInTheDocument();
  fireEvent.click(screen.getByText(MOVE_BUTTONS.LEFT));
  expect(screen.getByText('Status: 0 x 0')).toBeInTheDocument();
});

test('ToyRobot updates position on Set Position button click', () => {
  render(<ToyRobot />);

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText('X'), { target: { value: 2 } });
  fireEvent.change(screen.getByPlaceholderText('Y'), { target: { value: 3 } });

  // Click the "Set Position" button
  fireEvent.click(screen.getByText('Set Position'));

  // Check if the position is updated
  expect(screen.getByText('Status: 2 x 3')).toBeInTheDocument();
});
