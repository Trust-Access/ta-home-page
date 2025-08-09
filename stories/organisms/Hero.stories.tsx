import type { Meta, StoryObj } from '@storybook/react';
import Hero from '@/components/organisms/hero';
import { I18nProvider } from '@/lib/i18n';

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  component: Hero,
  decorators: [(Story) => (
    <I18nProvider>
      <Story />
    </I18nProvider>
  )],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};

