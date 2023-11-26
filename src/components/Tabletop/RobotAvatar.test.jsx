import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RobotAvatar from './RobotAvatar';

test('RobotAvatar component renders with correct image source and alt text', () => {
  render(<RobotAvatar />);

  const avatarImage = screen.getByAltText('Robot Avatar');

  // Check if the image is present and has the correct source
  expect(avatarImage).toBeInTheDocument();
  expect(avatarImage).toHaveAttribute('src', '/robot_avatar.png');
});

test('RobotAvatar component has correct styling', () => {
  render(<RobotAvatar />);

  const container = screen.getByTestId('container');
  const centeredImage = screen.getByTestId('avatar-image');

  // Check if the container has flex properties
  expect(container).toHaveStyle('display: flex');
  expect(container).toHaveStyle('justify-content: center');
  expect(container).toHaveStyle('align-items: center');
  expect(container).toHaveStyle('height: 100vh');

  // Check if the centered image has absolute positioning
  expect(centeredImage).toHaveStyle('position: absolute');
  expect(centeredImage).toHaveStyle('max-width: 100%');
  expect(centeredImage).toHaveStyle('max-height: 100%');
});
