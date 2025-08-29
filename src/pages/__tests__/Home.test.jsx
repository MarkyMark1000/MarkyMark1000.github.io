import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

// Mock the child components to avoid testing their implementation details
jest.mock('../../components/Card', () => {
  return function MockCard({ title, children, icon, delay }) {
    return (
      <div data-testid="card-component" data-delay={delay}>
        <div data-testid="card-icon">{icon}</div>
        <h3>{title}</h3>
        <div>{children}</div>
      </div>
    );
  };
});

jest.mock('../../components/PageTitle', () => {
  return function MockPageTitle({ title }) {
    return <h1 data-testid="page-title">{title}</h1>;
  };
});

jest.mock('../../components/PageSubTitle', () => {
  return function MockPageSubTitle({ subtitle }) {
    return <p data-testid="page-subtitle">{subtitle}</p>;
  };
});

jest.mock('../../components/ViewMyRepos', () => {
  return function MockViewMyRepos({ delay }) {
    return <div data-testid="view-repos" data-delay={delay}></div>;
  };
});

describe('Home', () => {
  test('renders Home page with all main sections', () => {
    render(<Home />);

    // Check if main title and subtitle are rendered
    expect(screen.getByTestId('page-title')).toHaveTextContent(
      'Welcome to MarkyMark1000'
    );
    expect(screen.getByTestId('page-subtitle')).toHaveTextContent(
      'Explore my projects, code repositories and development journey.'
    );

    // Check if ViewMyRepos component is rendered
    expect(screen.getByTestId('view-repos')).toBeInTheDocument();
  });

  test('renders all three content cards', () => {
    render(<Home />);

    const cardComponents = screen.getAllByTestId('card-component');
    expect(cardComponents).toHaveLength(3);

    // Check card titles
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  test('renders About Me card with correct content', () => {
    render(<Home />);

    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Software engineer with a strong foundation in maths and physics/i
      )
    ).toBeInTheDocument();
  });

  test('renders Education card with correct content', () => {
    render(<Home />);

    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(
      screen.getByText('Physics - Imperial College London')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Mathematical Trading and Finance - Bayes Business School'
      )
    ).toBeInTheDocument();
  });

  test('renders Skills card with correct content', () => {
    render(<Home />);

    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(
      screen.getByText(/Python, SQL, SQLAlchemy, Flask, Pandas, Numpy/i)
    ).toBeInTheDocument();
  });

  test('passes correct delay props to components', () => {
    render(<Home />);

    const cardComponents = screen.getAllByTestId('card-component');
    const viewRepos = screen.getByTestId('view-repos');

    // Check delay props are passed correctly
    expect(cardComponents[0]).toHaveAttribute('data-delay', '0'); // About Me
    expect(cardComponents[1]).toHaveAttribute('data-delay', '200'); // Education
    expect(cardComponents[2]).toHaveAttribute('data-delay', '400'); // Skills
    expect(viewRepos).toHaveAttribute('data-delay', '600'); // ViewMyRepos
  });

  test('renders with correct CSS classes for layout', () => {
    render(<Home />);

    const mainContainer = screen
      .getByText('Welcome to MarkyMark1000')
      .closest('div');
    expect(mainContainer?.parentElement).toHaveClass(
      'min-h-screen',
      'bg-indigo-50',
      'dark:bg-black'
    );
  });
});
