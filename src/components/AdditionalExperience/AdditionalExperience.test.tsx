import { render, screen } from '@testing-library/react';
import { AdditionalExperience } from './index';

describe('AdditionalExperience', () => {
  it('renders the section', () => {
    render(<AdditionalExperience />);
    const section = screen.getByTestId('additional-experience-section');
    expect(section).toBeInTheDocument();
  });

  it('renders the section header', () => {
    render(<AdditionalExperience />);
    expect(screen.getByText('// 03. Additional Experience')).toBeInTheDocument();
  });

  it('renders all additional experience roles', () => {
    render(<AdditionalExperience />);
    expect(screen.getByText('The Scotts Miracle-Gro Company')).toBeInTheDocument();
    expect(screen.getByText('OmniSpear Web & Network Solutions')).toBeInTheDocument();
    expect(screen.getByText('Wright State University')).toBeInTheDocument();
  });
});
