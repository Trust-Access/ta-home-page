import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/components/templates/theme-provider';

const meta: Meta<typeof ThemeProvider> = {
  title: 'Templates/ThemeProvider',
  component: ThemeProvider,
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
  render: () => (
    <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
      <div>Content</div>
    </ThemeProvider>
  ),
};

