import React from 'react';
import { render, screen } from '@testing-library/react';
import Repos from '../Repos';

// Mock the child components to avoid testing their implementation details
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

jest.mock('../../components/CardRepo', () => {
  return function MockCardRepo({ image, title, description, link, delay }) {
    return (
      <div data-testid="card-repo" data-delay={delay}>
        <img src={image} alt={title} data-testid="card-image" />
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} data-testid="repo-link">
            View Repository
          </a>
        )}
      </div>
    );
  };
});

describe('Repos', () => {
  test('renders Repos page with title and subtitle', () => {
    render(<Repos />);

    // Check if main title and subtitle are rendered
    expect(screen.getByTestId('page-title')).toHaveTextContent(
      "MarkyMark1000's Repositories"
    );
    expect(screen.getByTestId('page-subtitle')).toHaveTextContent(
      'Explore my projects, code repositories, and development journey.'
    );
  });

  test('renders both repository cards', () => {
    render(<Repos />);

    const cardRepos = screen.getAllByTestId('card-repo');
    expect(cardRepos).toHaveLength(2);

    // Check repository titles
    expect(screen.getByText('MarkyMark1000')).toBeInTheDocument();
    expect(screen.getByText('Unix Helper Scripts')).toBeInTheDocument();
  });

  test('renders MarkyMark1000 repository card with correct details', () => {
    render(<Repos />);

    expect(screen.getByText('MarkyMark1000')).toBeInTheDocument();
    expect(
      screen.getByText(/My personal github website showcasing repositories/i)
    ).toBeInTheDocument();

    // Check image source
    const images = screen.getAllByTestId('card-image');
    const markyMarkImage = images.find(
      img => img.getAttribute('alt') === 'MarkyMark1000'
    );
    expect(markyMarkImage).toHaveAttribute(
      'src',
      '/images/repos/MarkyMark1000.jpg'
    );

    // Check link
    const repoLinks = screen.getAllByTestId('repo-link');
    const markyMarkLink = repoLinks.find(
      link =>
        link.getAttribute('href') ===
        'https://github.com/MarkyMark1000/MarkyMark1000.github.io'
    );
    expect(markyMarkLink).toBeInTheDocument();
  });

  test('renders Unix Helper Scripts repository card with correct details', () => {
    render(<Repos />);

    expect(screen.getByText('Unix Helper Scripts')).toBeInTheDocument();
    expect(
      screen.getByText(/A collection of useful Unix\/Linux helper scripts/i)
    ).toBeInTheDocument();

    // Check image source
    const images = screen.getAllByTestId('card-image');
    const unixImage = images.find(
      img => img.getAttribute('alt') === 'Unix Helper Scripts'
    );
    expect(unixImage).toHaveAttribute('src', '/images/repos/unix_helper.jpg');

    // Check link
    const repoLinks = screen.getAllByTestId('repo-link');
    const unixLink = repoLinks.find(
      link =>
        link.getAttribute('href') === 'https://github.com/MarkyMark1000/bin'
    );
    expect(unixLink).toBeInTheDocument();
  });

  test('passes correct delay props to CardRepo components', () => {
    render(<Repos />);

    const cardRepos = screen.getAllByTestId('card-repo');

    // Check delay props are passed correctly
    expect(cardRepos[0]).toHaveAttribute('data-delay', '0'); // MarkyMark1000
    expect(cardRepos[1]).toHaveAttribute('data-delay', '200'); // Unix Helper Scripts
  });

  test('renders ViewMyRepos component', () => {
    render(<Repos />);

    const viewRepos = screen.getByTestId('view-repos');
    expect(viewRepos).toBeInTheDocument();

    // ViewMyRepos in Repos page doesn't have delay prop, so it should be undefined
    expect(viewRepos).not.toHaveAttribute('data-delay');
  });

  test('renders with correct CSS classes for layout', () => {
    render(<Repos />);

    const mainContainer = screen.getByTestId('page-title').closest('div');
    expect(mainContainer?.parentElement).toHaveClass(
      'min-h-screen',
      'bg-indigo-50',
      'dark:bg-black'
    );
  });

  test('renders repository cards in grid layout', () => {
    render(<Repos />);

    const cardRepos = screen.getAllByTestId('card-repo');
    const gridContainer = cardRepos[0].parentElement;
    expect(gridContainer).toHaveClass('grid', 'md:grid-cols-2', 'gap-6');
  });
});
