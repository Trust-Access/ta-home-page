import type { Meta, StoryObj } from '@storybook/react';
import Hero from '@/components/organisms/hero';

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  component: Hero,
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};

