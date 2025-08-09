import type { Meta, StoryObj } from '@storybook/react';
import ComplianceSection from '@/components/organisms/compliance-section';

const meta: Meta<typeof ComplianceSection> = {
  title: 'Organisms/ComplianceSection',
  component: ComplianceSection,
};

export default meta;
type Story = StoryObj<typeof ComplianceSection>;

export const Default: Story = {};

