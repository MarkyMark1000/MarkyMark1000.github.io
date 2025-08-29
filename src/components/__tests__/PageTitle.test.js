import React from 'react';
import { render, screen, act } from '@testing-library/react';
import PageTitle from '../PageTitle';

// Mock timers for testing useEffect with setTimeout
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('PageTitle', () => {
  test('renders PageTitle with title and triggers animation', () => {
    render(<PageTitle title="Test Page Title" />);

    // Check if title is rendered
    const titleElement = screen.getByRole('heading', {
      name: 'Test Page Title',
    });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('text-4xl', 'md:text-6xl', 'font-bold');

    // Fast-forward time to trigger the useEffect setTimeout
    act(() => {
      jest.advanceTimersByTime(100);
    });
  });

  test('renders with different title text', () => {
    render(<PageTitle title="Another Title" />);

    expect(
      screen.getByRole('heading', { name: 'Another Title' })
    ).toBeInTheDocument();
  });
});
