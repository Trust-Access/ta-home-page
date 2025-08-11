import { render, screen } from '@/test/test-utils';
import TestimonialsSection from '../testimonials-section';
import { testimonials } from '@/data/testimonials';

describe('TestimonialsSection', () => {
  it('renders testimonials data', () => {
    render(<TestimonialsSection />);
    expect(screen.getByText(testimonials[0].quote)).toBeInTheDocument();
    expect(screen.getByText(testimonials[1].quote)).toBeInTheDocument();
  });
});
