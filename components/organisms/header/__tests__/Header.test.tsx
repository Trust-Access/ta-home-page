import Header from '@/components/organisms/header';
import { navItems } from '@/data/navigation';
import { render, screen } from '@/test/test-utils';

describe('Header', () => {
  it('renders logo text', async () => {
    const ui = await Header();
    render(ui);
    expect(screen.getByText('Trust Access')).toBeInTheDocument();
  });

  it('renders navigation links', async () => {
    const ui = await Header();
    render(ui);
    navItems.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
