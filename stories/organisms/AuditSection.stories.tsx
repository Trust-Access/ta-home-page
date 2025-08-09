import type { Meta, StoryObj } from '@storybook/react';
import AuditSection from '@/components/organisms/audit-section';

const meta: Meta<typeof AuditSection> = {
  title: 'Organisms/AuditSection',
  component: AuditSection,
};

export default meta;
type Story = StoryObj<typeof AuditSection>;

export const Default: Story = {};

