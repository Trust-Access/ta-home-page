import AuditSection from '../audit-section';
import { render, screen } from '@/test/test-utils';

describe('AuditSection', () => {
  it('renders audit content', () => {
    render(<AuditSection />);
    expect(screen.getByText('audit.title')).toBeInTheDocument();
    expect(screen.getByText('audit.description')).toBeInTheDocument();
  });
});
