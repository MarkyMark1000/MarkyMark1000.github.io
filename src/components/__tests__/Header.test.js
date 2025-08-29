import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  test('renders Header with logo and navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check if logo/title is rendered as a link
    const logoLink = screen.getByRole('link', { name: 'MarkyMark1000' });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    // Check if navigation links are rendered
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const reposLink = screen.getByRole('link', { name: 'Repos' });

    expect(homeLink).toBeInTheDocument();
    expect(reposLink).toBeInTheDocument();
  });

  test('shows Home as active when on home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const reposLink = screen.getByRole('link', { name: 'Repos' });

    // Home should have active styles
    expect(homeLink).toHaveClass('bg-[#5a5a9e]');
    // Repos should not have active styles
    expect(reposLink).not.toHaveClass('bg-[#5a5a9e]');
  });

  test('shows Repos as active when on repos route', () => {
    render(
      <MemoryRouter initialEntries={['/repos']}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    const reposLink = screen.getByRole('link', { name: 'Repos' });

    // Repos should have active styles
    expect(reposLink).toHaveClass('bg-[#5a5a9e]');
    // Home should not have active styles
    expect(homeLink).not.toHaveClass('bg-[#5a5a9e]');
  });
});
