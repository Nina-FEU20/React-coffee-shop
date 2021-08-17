import { render, getByTestId } from '@testing-library/react';
import Landing from './Landing';

test('Testing source and alt on images in Landing-component', () => {
  const { container } = render(<Landing />);
  const leftImage = getByTestId(container, 'leftImage');
  const logoImage = getByTestId(container, 'logoImage');
  const rightImage = getByTestId(container, 'rightImage');

  // Left image
  expect(leftImage.alt).toBe('graphic left');
  expect(leftImage).toHaveAttribute('src', 'intro-graphic-left.svg');

  // Logo
  expect(logoImage.alt).toBe('airbean logo');
  expect(logoImage).toHaveAttribute('src', 'airbean-landing.svg');

  // Right image
  expect(rightImage.alt).toBe('graphic right');
  expect(rightImage).toHaveAttribute('src', 'intro-graphic-right.svg');
});
