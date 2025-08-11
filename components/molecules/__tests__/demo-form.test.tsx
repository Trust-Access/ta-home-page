import { render, screen } from '@/test/test-utils';
import DemoForm from '../demo-form';

describe('DemoForm', () => {
  it('renders the demo form heading', () => {
    render(<DemoForm />);
    expect(screen.getByText('Agendar uma Demo')).toBeInTheDocument();
  });
});
