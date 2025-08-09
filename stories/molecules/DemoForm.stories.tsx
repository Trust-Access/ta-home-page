import type { Meta, StoryObj } from '@storybook/react';
import DemoForm from '@/components/molecules/demo-form';

const meta: Meta<typeof DemoForm> = {
  title: 'Molecules/DemoForm',
  component: DemoForm,
};

export default meta;
type Story = StoryObj<typeof DemoForm>;

export const Default: Story = {};

