import ServicesSection from '../services-section';
import { render, screen } from '@/test/test-utils';

describe('ServicesSection', () => {
  it('renders services content', async () => {
    const ui = await ServicesSection();
    render(ui);
    expect(screen.getByText('services.intro')).toBeInTheDocument();
    expect(screen.getByText('services.title')).toBeInTheDocument();
    expect(screen.getByText('services.description')).toBeInTheDocument();
  });
});
