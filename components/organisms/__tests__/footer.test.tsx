import Footer from '../footer';
import { render, screen } from '@/test/test-utils';

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />);
    expect(screen.getByText('footer.tagline')).toBeInTheDocument();
    expect(screen.getByText('footer.services')).toBeInTheDocument();
    expect(screen.getByText('footer.company')).toBeInTheDocument();
  });
});
