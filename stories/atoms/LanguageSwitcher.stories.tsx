import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from '@/components/atoms/language-switcher';
import { I18nProvider } from '@/lib/i18n';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Atoms/LanguageSwitcher',
  component: LanguageSwitcher,
  decorators: [(Story) => (
    <I18nProvider>
      <Story />
    </I18nProvider>
  )],
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {};

