import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/organisms/header';
import { I18nProvider } from '@/lib/i18n';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  decorators: [(Story) => (
    <I18nProvider>
      <Story />
    </I18nProvider>
  )],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

