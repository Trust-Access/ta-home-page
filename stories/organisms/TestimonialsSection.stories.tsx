import type { Meta, StoryObj } from '@storybook/react';
import TestimonialsSection from '@/components/organisms/testimonials-section';

const meta: Meta<typeof TestimonialsSection> = {
  title: 'Organisms/TestimonialsSection',
  component: TestimonialsSection,
};

export default meta;
type Story = StoryObj<typeof TestimonialsSection>;

export const Default: Story = {};

