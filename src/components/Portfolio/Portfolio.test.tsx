import { render, screen } from '@testing-library/react';
import { Portfolio } from './index';

describe('<Portfolio />', () => {
  test('should render the education-section and apply the correct class name', () => {
    render(<Portfolio />);

    const renderedText: HTMLElement = screen.getByTestId('portfolio-section');

    expect(renderedText).toHaveClass('portfolioSection');
  });
  test('should render the header-section and apply the correct class name', () => {
    render(<Portfolio />);

    const renderedText: HTMLElement = screen.getByTestId('header-section');

    expect(renderedText).toHaveClass('headerSection');
  });
  test('should render the title-section and apply the correct class name', () => {
    render(<Portfolio />);

    const renderedText: HTMLElement = screen.getByTestId('title-section');

    expect(renderedText).toHaveClass('titleSection');
  });
  test('should render the spacing-bar and apply the correct class name', () => {
    render(<Portfolio />);

    const renderedText: HTMLElement = screen.getByTestId('spacing-bar');

    expect(renderedText).toHaveClass('spacingBar');
  });
});
