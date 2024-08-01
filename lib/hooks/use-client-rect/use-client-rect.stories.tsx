import type { Meta, StoryObj } from '@storybook/react';
import useClientRect, { type UseClientRectProps } from './use-client-rect';
import { UseClientRectStory } from './use-client-rect.story';

const meta = {
  title: 'Components/UseClientRect',
  component: UseClientRectStory,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      toc: false,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof useClientRect>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps: UseClientRectProps = {};

export const DefaultUseClientRect: Story = {
  args: {
    ...defaultProps,
  },
};
