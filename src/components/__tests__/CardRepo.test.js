import React from 'react';
import { render, screen, act } from '@testing-library/react';
import CardRepo from '../CardRepo';

// Mock timers for testing useEffect with setTimeout
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('CardRepo', () => {
  const defaultProps = {
    image: '/test-image.jpg',
    title: 'Test Repository',
    description: 'Test description for repository',
    link: 'https://github.com/test/repo',
    delay: 100,
  };

  test('renders CardRepo with all props and triggers animation', async () => {
    render(<CardRepo {...defaultProps} />);

    // Check if title and description are rendered
    expect(screen.getByText('Test Repository')).toBeInTheDocument();
    expect(
      screen.getByText('Test description for repository')
    ).toBeInTheDocument();

    // Check if link is rendered
    const repoLink = screen.getByRole('link', { name: /view repository/i });
    expect(repoLink).toBeInTheDocument();
    expect(repoLink).toHaveAttribute('href', 'https://github.com/test/repo');
    expect(repoLink).toHaveAttribute('target', '_blank');
    expect(repoLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Fast-forward time to trigger the useEffect setTimeout
    act(() => {
      jest.advanceTimersByTime(900); // 800 + delay(100)
    });
  });

  test('renders CardRepo without link', () => {
    const propsWithoutLink = {
      ...defaultProps,
      link: null,
    };

    render(<CardRepo {...propsWithoutLink} />);

    // Check if title and description are still rendered
    expect(screen.getByText('Test Repository')).toBeInTheDocument();
    expect(
      screen.getByText('Test description for repository')
    ).toBeInTheDocument();

    // Check that link is not rendered
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  test('renders with default delay when delay prop not provided', () => {
    const propsWithoutDelay = {
      image: '/test-image.jpg',
      title: 'Test Repository',
      description: 'Test description for repository',
    };

    render(<CardRepo {...propsWithoutDelay} />);

    expect(screen.getByText('Test Repository')).toBeInTheDocument();

    // Fast-forward time to trigger the useEffect setTimeout with default delay (0)
    act(() => {
      jest.advanceTimersByTime(800); // 800 + delay(0)
    });
  });
});
