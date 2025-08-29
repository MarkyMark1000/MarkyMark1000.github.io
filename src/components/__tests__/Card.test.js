import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Card from '../Card';

// Mock timers for testing useEffect with setTimeout
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('Card', () => {
  const mockIcon = (
    <svg data-testid="test-icon" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );

  test('renders Card with all props and triggers animation', () => {
    render(
      <Card icon={mockIcon} title="Test Card Title" delay={100}>
        <p>Test card content goes here</p>
      </Card>
    );

    // Check if title, icon, and content are rendered
    expect(screen.getByText('Test Card Title')).toBeInTheDocument();
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByText('Test card content goes here')).toBeInTheDocument();

    // Fast-forward time to trigger the useEffect setTimeout
    act(() => {
      jest.advanceTimersByTime(900); // 800 + delay(100)
    });
  });

  test('renders with default delay when delay prop not provided', () => {
    render(
      <Card icon={mockIcon} title="Default Delay Card">
        <span>Default delay content</span>
      </Card>
    );

    expect(screen.getByText('Default Delay Card')).toBeInTheDocument();
    expect(screen.getByText('Default delay content')).toBeInTheDocument();

    // Fast-forward time to trigger the useEffect setTimeout with default delay (0)
    act(() => {
      jest.advanceTimersByTime(800); // 800 + delay(0)
    });
  });

  test('renders with complex children content', () => {
    render(
      <Card icon={mockIcon} title="Complex Content Card" delay={50}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>
    );

    expect(screen.getByText('Complex Content Card')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});
