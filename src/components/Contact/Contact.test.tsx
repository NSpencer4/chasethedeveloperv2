import { render, screen } from '@testing-library/react';
import { Contact } from './index';

describe('<Contact />', () => {
  test('should render the contact-section and apply the correct class name', () => {
    render(<Contact />);

    const renderedText: HTMLElement = screen.getByTestId('contact-section');

    expect(renderedText).toHaveClass('contactSection');
  });
  test('should render the header-section and apply the correct class name', () => {
    render(<Contact />);

    const renderedText: HTMLElement = screen.getByTestId('header-section');

    expect(renderedText).toHaveClass('headerSection');
  });
  test('should render the title-section and apply the correct class name', () => {
    render(<Contact />);

    const renderedText: HTMLElement = screen.getByTestId('title-section');

    expect(renderedText).toHaveClass('titleSection');
  });
  test('should render the spacing-bar and apply the correct class name', () => {
    render(<Contact />);

    const renderedText: HTMLElement = screen.getByTestId('spacing-bar');

    expect(renderedText).toHaveClass('spacingBar');
  });
});
