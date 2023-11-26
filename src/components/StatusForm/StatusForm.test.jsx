import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StatusForm from './StatusForm';
import { MOVE_BUTTONS } from '../../constants/constValues';

test('StatusForm component renders correctly', () => {
  render(<StatusForm />);

  // Check if status field and directional buttons are present
  expect(screen.getByText('Status: 0 x 0')).toBeInTheDocument();
  expect(screen.getByText(MOVE_BUTTONS.UP)).toBeInTheDocument();
  expect(screen.getByText(MOVE_BUTTONS.DOWN)).toBeInTheDocument();
  expect(screen.getByText(MOVE_BUTTONS.LEFT)).toBeInTheDocument();
  expect(screen.getByText(MOVE_BUTTONS.RIGHT)).toBeInTheDocument();

  // Check if SetPositionForm is rendered
  expect(screen.getByPlaceholderText('X')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Y')).toBeInTheDocument();
  expect(screen.getByText('Set Position')).toBeInTheDocument();
});

test('StatusForm handles directional button clicks', () => {
  const mockDirectionClick = jest.fn();
  render(<StatusForm onDirectionClick={mockDirectionClick} />);

  // Click the directional buttons
  fireEvent.click(screen.getByText(MOVE_BUTTONS.UP));
  fireEvent.click(screen.getByText(MOVE_BUTTONS.DOWN));
  fireEvent.click(screen.getByText(MOVE_BUTTONS.LEFT));
  fireEvent.click(screen.getByText(MOVE_BUTTONS.RIGHT));

  // Check if the onDirectionClick callback is called with the correct arguments
  expect(mockDirectionClick).toHaveBeenCalledWith(MOVE_BUTTONS.UP);
  expect(mockDirectionClick).toHaveBeenCalledWith(MOVE_BUTTONS.DOWN);
  expect(mockDirectionClick).toHaveBeenCalledWith(MOVE_BUTTONS.LEFT);
  expect(mockDirectionClick).toHaveBeenCalledWith(MOVE_BUTTONS.RIGHT);
});

test('StatusForm handles Set Position button click', () => {
  const mockSetPosition = jest.fn();
  render(<StatusForm onSetPosition={mockSetPosition} />);

  // Simulate user input
  fireEvent.change(screen.getByPlaceholderText('X'), { target: { value: '2' } });
  fireEvent.change(screen.getByPlaceholderText('Y'), { target: { value: '3' } });

  // Click the "Set Position" button
  fireEvent.click(screen.getByText('Set Position'));

  // Check if the onSetPosition callback is called with the correct arguments
  expect(mockSetPosition).toHaveBeenCalledWith({ x: 2, y: 3 });
});
