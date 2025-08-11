import ComplianceSection from '../compliance-section';
import { render, screen } from '@/test/test-utils';

describe('ComplianceSection', () => {
  it('renders compliance content', () => {
    render(<ComplianceSection />);
    expect(screen.getByText('compliance.title')).toBeInTheDocument();
    expect(screen.getByText('compliance.description')).toBeInTheDocument();
  });
});
