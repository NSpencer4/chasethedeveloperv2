import { render, screen } from '@testing-library/react';
import { Education } from './index';

describe('<Education />', () => {
  test('should render the profile-section and apply the correct class name', () => {
    render(<Education />);

    const renderedText: HTMLElement = screen.getByTestId('education-section');

    expect(renderedText).toHaveClass('educationSection');
  });
  test('should render the header-section and apply the correct class name', () => {
    render(<Education />);

    const renderedText: HTMLElement = screen.getByTestId('header-section');

    expect(renderedText).toHaveClass('headerSection');
  });
  test('should render the title-section and apply the correct class name', () => {
    render(<Education />);

    const renderedText: HTMLElement = screen.getByTestId('title-section');

    expect(renderedText).toHaveClass('titleSection');
  });
  test('should render the spacing-bar and apply the correct class name', () => {
    render(<Education />);

    const renderedText: HTMLElement = screen.getByTestId('spacing-bar');

    expect(renderedText).toHaveClass('spacingBar');
  });
  test('should render the wsuPic and apply the correct class name', () => {
    render(<Education />);

    const renderedText: HTMLElement = screen.getByTestId('wsuPic');

    expect(renderedText).toHaveClass('wsuPic');
  });
});
