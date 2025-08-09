import type { Meta, StoryObj } from '@storybook/react';
import { QueryProvider } from '@/components/templates/query-provider';

const meta: Meta<typeof QueryProvider> = {
  title: 'Templates/QueryProvider',
  component: QueryProvider,
};

export default meta;
type Story = StoryObj<typeof QueryProvider>;

export const Default: Story = {
  render: () => (
    <QueryProvider>
      <div>Content</div>
    </QueryProvider>
  ),
};

