import { render, screen } from '@/test/test-utils';
import ClientsSection from '../clients-section';
import { clientCases } from '@/data/client-cases';

describe('ClientsSection', () => {
  it('renders clients heading and cases', async () => {
    const ui = await ClientsSection();
    render(ui);
    expect(screen.getByText('clients.heading')).toBeInTheDocument();
    clientCases.forEach(({ heading }) => {
      expect(screen.getByText(heading)).toBeInTheDocument();
    });
  });
});
