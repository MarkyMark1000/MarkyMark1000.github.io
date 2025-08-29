import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  test('renders Footer with copyright and GitHub link', () => {
    // Mock Date.getFullYear to return a consistent year
    const mockGetFullYear = jest.fn(() => 2024);
    jest
      .spyOn(Date.prototype, 'getFullYear')
      .mockImplementation(mockGetFullYear);

    render(<Footer />);

    // Check if copyright text is rendered with current year
    expect(
      screen.getByText('© 2024 Mark Wilson. All rights reserved.')
    ).toBeInTheDocument();

    // Check if "Find me on" text is present
    expect(screen.getByText('Find me on')).toBeInTheDocument();

    // Check if GitHub link is rendered with correct attributes
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/MarkyMark1000'
    );
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Check if GitHub SVG icon is present within the link
    expect(githubLink).toContainHTML('<svg');

    // Restore original implementation
    mockGetFullYear.mockRestore();
  });

  test('displays current year dynamically', () => {
    // Mock Date.getFullYear to return a different year
    const mockGetFullYear = jest.fn(() => 2025);
    jest
      .spyOn(Date.prototype, 'getFullYear')
      .mockImplementation(mockGetFullYear);

    render(<Footer />);

    expect(
      screen.getByText('© 2025 Mark Wilson. All rights reserved.')
    ).toBeInTheDocument();

    // Restore original implementation
    mockGetFullYear.mockRestore();
  });
});
