import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/organisms/header';
import { navItems } from '@/data/navigation';

describe('Header', () => {
  it('renders logo text', () => {
    render(<Header />);
    expect(screen.getByText('Trust Access')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    navItems.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
