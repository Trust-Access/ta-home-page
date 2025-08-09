import type { Meta, StoryObj } from '@storybook/react';
import ServicesSection from '@/components/organisms/services-section';

const meta: Meta<typeof ServicesSection> = {
  title: 'Organisms/ServicesSection',
  component: ServicesSection,
};

export default meta;
type Story = StoryObj<typeof ServicesSection>;

export const Default: Story = {};

