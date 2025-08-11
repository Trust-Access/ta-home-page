import TrustSection from '../trust-section';
import { render, screen } from '@/test/test-utils';

describe('TrustSection', () => {
  it('renders trust content', () => {
    render(<TrustSection />);
    expect(screen.getByText('trust.before', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('trust.highlight')).toBeInTheDocument();
  });
});
