import { render, screen } from '@testing-library/react';
import { Intro } from './index';

describe('<Intro />', () => {
  test('should render the container', () => {
    render(<Intro />);

    const renderedText: HTMLElement = screen.getByTestId('home-container');

    expect(renderedText).toHaveClass('homeContainer');
    expect(renderedText).toHaveClass('backgroundTint');
  });
  test('should render the h1 with the author\'s name and apply the correct styles', () => {
    render(<Intro />);

    const renderedText: HTMLElement = screen.getByText('Chase Spencer');

    expect(renderedText).toHaveClass('introName');
  });
  test('should render the intro title for the author and apply the correct styles', () => {
    render(<Intro />);

    const renderedText: HTMLElement = screen.getByText('Software Developer');

    expect(renderedText).toHaveClass('introTitle');
  });
});
