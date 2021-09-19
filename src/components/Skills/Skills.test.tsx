import { render, screen } from '@testing-library/react';
import { Skills } from './index';

describe('<Skills />', () => {
  test('should render the skills section', () => {
    render(<Skills />);

    const renderedText: HTMLElement = screen.getByTestId('skills-section');

    expect(renderedText).toHaveClass('skillsSection');
  });
  test('should render the header section with the correct class', () => {
    render(<Skills />);

    const renderedText: HTMLElement = screen.getByTestId('header-section');

    expect(renderedText).toHaveClass('headerSection');
  });
  test('should render the header text', () => {
    render(<Skills />);

    const renderedText: HTMLElement = screen.getByText('Skills');

    expect(renderedText).toHaveClass('titleSection');
  });
  test('should render the header spacing bar', () => {
    render(<Skills />);

    const renderedText: HTMLElement = screen.getByTestId('spacing-bar');

    expect(renderedText).toHaveClass('spacingBar');
  });
  describe('Rendering the skills icons', () => {
    test('should render the angular skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('angular');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-angular');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the adobe skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('adobe');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-adobe');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the drupal skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('drupal');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-drupal');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the php skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('php');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-php');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the python skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('python');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-python');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the java skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('java');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-java');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the js skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('js');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-js');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the aws skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('aws');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-aws');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the google skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('google');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-google');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the wordpress skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('wordpress');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-wordpress');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the magento skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('magento');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-magento');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the css3 skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('css3');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-css3-alt');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the git skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('git');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-git-square');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the github skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('github');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-github-square');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the html5 skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('html5');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-html5');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the react skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('react');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-react');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the sass skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('sass');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-sass');
      expect(renderedText).toHaveClass('skills-fa');
    });
    test('should render the node skill icon and apply the correct classes', () => {
      render(<Skills />);

      const renderedText: HTMLElement = screen.getByTestId('node');

      expect(renderedText).toHaveClass('fab');
      expect(renderedText).toHaveClass('fa-node');
      expect(renderedText).toHaveClass('skills-fa');
    });
  });
});
