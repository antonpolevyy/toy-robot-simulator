import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SetPositionForm from './SetPositionForm';

test('SetPositionForm component renders correctly', () => {
  render(<SetPositionForm />);

  // Check if input fields and the button are present
  expect(screen.getByPlaceholderText('X')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Y')).toBeInTheDocument();
  expect(screen.getByText('Set Position')).toBeInTheDocument();
});

test('SetPositionForm handles input changes', () => {
  render(<SetPositionForm />);

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText('X'), { target: { value: 3 } });
  fireEvent.change(screen.getByPlaceholderText('Y'), { target: { value: 4 } });

  // Check if input values are updated
  expect(screen.getByPlaceholderText('X')).toHaveValue(3);
  expect(screen.getByPlaceholderText('Y')).toHaveValue(4);
});

test('SetPositionForm handles set position button click', () => {
  const mockSetPosition = jest.fn();
  render(<SetPositionForm onSetPosition={mockSetPosition} />);

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText('X'), { target: { value: '2' } });
  fireEvent.change(screen.getByPlaceholderText('Y'), { target: { value: '3' } });

  // Click the "Set Position" button
  fireEvent.click(screen.getByText('Set Position'));

  // Check if the onSetPosition callback is called with the correct arguments
  expect(mockSetPosition).toHaveBeenCalledWith({ x: 2, y: 3 });
});

test('SetPositionForm displays error message for out-of-range coordinates', () => {
  render(<SetPositionForm />);

  // Simulate user input with out-of-range coordinates
  fireEvent.change(screen.getByPlaceholderText('X'), { target: { value: 10 } });
  fireEvent.change(screen.getByPlaceholderText('Y'), { target: { value: 15 } });

  // Click the "Set Position" button
  fireEvent.click(screen.getByText('Set Position'));

  // Check if the error message is displayed
  expect(
    screen.getByText('Error: Failed to set new position. Coordinates are out of range'),
  ).toBeInTheDocument();
});
