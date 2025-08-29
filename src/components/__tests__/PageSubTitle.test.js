import React from 'react';
import { render, screen, act } from '@testing-library/react';
import PageSubTitle from '../PageSubTitle';

// Mock timers for testing useEffect with setTimeout
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('PageSubTitle', () => {
  test('renders PageSubTitle with subtitle and triggers animation', () => {
    render(<PageSubTitle subtitle="Test page subtitle content" />);

    // Check if subtitle is rendered
    expect(screen.getByText('Test page subtitle content')).toBeInTheDocument();

    // Fast-forward time to trigger the useEffect setTimeout
    act(() => {
      jest.advanceTimersByTime(200);
    });
  });

  test('renders with different subtitle text', () => {
    render(<PageSubTitle subtitle="Different subtitle text" />);

    expect(screen.getByText('Different subtitle text')).toBeInTheDocument();
  });
});
