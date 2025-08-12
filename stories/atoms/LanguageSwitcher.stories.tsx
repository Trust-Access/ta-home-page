import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from '@/components/atoms/language-switcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Atoms/LanguageSwitcher',
  component: LanguageSwitcher,
  args: {
    locale: 'pt',
    languages: [
      { value: 'en', label: 'English', flag: '🇺🇸' },
      { value: 'es', label: 'Español', flag: '🇪🇸' },
      { value: 'pt', label: 'Português', flag: '🇧🇷' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof LanguageSwitcher>;

export const Default: Story = {};

