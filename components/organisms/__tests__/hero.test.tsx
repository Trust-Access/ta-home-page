import Hero from '../hero';
import { render, screen } from '@/test/test-utils';

describe('Hero', () => {
  it('renders hero content', async () => {
    const ui = await Hero();
    render(ui);
    expect(screen.getByText('hero.title')).toBeInTheDocument();
    expect(screen.getByText('hero.cta')).toBeInTheDocument();
  });
});
