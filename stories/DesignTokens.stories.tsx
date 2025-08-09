import type { Meta } from '@storybook/react';

const meta: Meta = {
  title: 'Design Tokens/Colors',
  tags: ['documentation'],
};

export default meta;

export const Colors = () => (
  <div className='space-y-4'>
    {['background', 'foreground', 'primary', 'secondary', 'accent'].map(
      (token) => (
        <div key={token} className='flex items-center'>
          <div
            className='w-10 h-10 rounded border'
            style={{ backgroundColor: `hsl(var(--${token}))` }}
          />
          <span className='ml-2'>--{token}</span>
        </div>
      ),
    )}
  </div>
);

