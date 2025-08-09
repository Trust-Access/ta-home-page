import type { Meta, StoryObj } from '@storybook/react';
import ClientsSection from '@/components/organisms/clients-section';

const meta: Meta<typeof ClientsSection> = {
  title: 'Organisms/ClientsSection',
  component: ClientsSection,
};

export default meta;
type Story = StoryObj<typeof ClientsSection>;

export const Default: Story = {};

