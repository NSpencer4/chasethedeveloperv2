import { render, screen } from '@testing-library/react';
import { Profile } from './index';

describe('<Profile />', () => {
  test('should render the profile-section and apply the correct class name', () => {
    render(<Profile />);

    const renderedText: HTMLElement = screen.getByTestId('profile-section');

    expect(renderedText).toHaveClass('profileSection');
  });
  test('should render the header-section and apply the correct class name', () => {
    render(<Profile />);

    const renderedText: HTMLElement = screen.getByTestId('header-section');

    expect(renderedText).toHaveClass('headerSection');
  });
  test('should render the title-section and apply the correct class name', () => {
    render(<Profile />);

    const renderedText: HTMLElement = screen.getByTestId('title-section');

    expect(renderedText).toHaveClass('titleSection');
  });
  test('should render the spacing-bar and apply the correct class name', () => {
    render(<Profile />);

    const renderedText: HTMLElement = screen.getByTestId('spacing-bar');

    expect(renderedText).toHaveClass('spacingBar');
  });
  test('should render the about-section and apply the correct class name', () => {
    render(<Profile />);

    const renderedText: HTMLElement = screen.getByTestId('about-section');

    expect(renderedText).toHaveClass('aboutSection');
  });
  test('should render the about-me-pic and apply the correct class name', () => {
    render(<Profile />);

    const renderedText: HTMLElement = screen.getByTestId('about-me-pic');

    expect(renderedText).toHaveClass('aboutMeImg');
  });
  test('should render the about-me-p and apply the correct class name', () => {
    render(<Profile />);

    const renderedText: HTMLElement = screen.getByTestId('about-me-p');

    expect(renderedText).toHaveClass('aboutMeParagraph');
  });
});
