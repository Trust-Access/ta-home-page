import AuditSection from '../audit-section';
import { render, screen } from '@/test/test-utils';

describe('AuditSection', () => {
  it('renders audit content', async () => {
    const ui = await AuditSection();
    render(ui);
    expect(screen.getByText('audit.title')).toBeInTheDocument();
    expect(screen.getByText('audit.description')).toBeInTheDocument();
  });
});
