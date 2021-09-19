import { render, screen } from '@testing-library/react';
import { Experience } from './index';

describe('<Experience />', () => {
  test('should render the experience-section and apply the correct class name', () => {
    render(<Experience />);

    const renderedText: HTMLElement = screen.getByTestId('experience-section');

    expect(renderedText).toHaveClass('experienceSection');
  });
  test('should render the header-section and apply the correct class name', () => {
    render(<Experience />);

    const renderedText: HTMLElement = screen.getByTestId('header-section');

    expect(renderedText).toHaveClass('headerSection');
  });
  test('should render the title-section and apply the correct class name', () => {
    render(<Experience />);

    const renderedText: HTMLElement = screen.getByTestId('title-section');

    expect(renderedText).toHaveClass('titleSection');
  });
  test('should render the spacing-bar and apply the correct class name', () => {
    render(<Experience />);

    const renderedText: HTMLElement = screen.getByTestId('spacing-bar');

    expect(renderedText).toHaveClass('spacingBar');
  });
});
