import ComplianceSection from '../compliance-section';
import { render, screen } from '@/test/test-utils';

describe('ComplianceSection', () => {
  it('renders compliance content', async () => {
    const ui = await ComplianceSection();
    render(ui);
    expect(screen.getByText('compliance.title')).toBeInTheDocument();
    expect(screen.getByText('compliance.description')).toBeInTheDocument();
  });
});
