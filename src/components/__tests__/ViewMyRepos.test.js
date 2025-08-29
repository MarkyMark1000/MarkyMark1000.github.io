import React from 'react';
import { render, screen, act } from '@testing-library/react';
import ViewMyRepos from '../ViewMyRepos';

// Mock timers for testing useEffect with setTimeout
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('ViewMyRepos', () => {
  test('renders ViewMyRepos with link and triggers animation with custom delay', () => {
    render(<ViewMyRepos delay={100} />);

    // Check if link is rendered with correct attributes
    const repoLink = screen.getByRole('link', {
      name: /view my repositories/i,
    });
    expect(repoLink).toBeInTheDocument();
    expect(repoLink).toHaveAttribute(
      'href',
      'https://github.com/MarkyMark1000?tab=repositories'
    );
    expect(repoLink).toHaveAttribute('target', '_blank');
    expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Check if SVG icon is present within the link
    expect(repoLink).toContainHTML('<svg');

    // Fast-forward time to trigger the useEffect setTimeout
    act(() => {
      jest.advanceTimersByTime(900); // 800 + delay(100)
    });
  });

  test('renders with default delay when delay prop not provided', () => {
    render(<ViewMyRepos />);

    // Check if link is rendered
    const repoLink = screen.getByRole('link', {
      name: /view my repositories/i,
    });
    expect(repoLink).toBeInTheDocument();

    // Fast-forward time to trigger the useEffect setTimeout with default delay (0)
    act(() => {
      jest.advanceTimersByTime(800); // 800 + delay(0)
    });
  });
});
