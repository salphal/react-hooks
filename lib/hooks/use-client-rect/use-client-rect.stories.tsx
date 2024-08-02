import type { Meta, StoryObj } from '@storybook/react';
import UseClientRect, {
  type UseClientRectProps,
  type ClientRect,
  initialClientRect,
} from './use-client-rect';
import { UseClientRectStory } from './use-client-rect.story';

const meta = {
  title: 'Hooks/UseClientRect',
  component: UseClientRectStory,
  // tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      toc: true,
    },
  },
  args: {
    width: 200,
    height: 200,
    top: 100,
    left: 100,
    rect: initialClientRect,
  },
  argTypes: {
    width: {
      type: 'number',
      control: {
        type: 'number',
      },
      description: '测试属性( 非组件或方法的属性 )',
    },
    height: {
      type: 'number',
      control: {
        type: 'number',
      },
      description: '测试属性( 非组件或方法的属性 )',
    },
    top: {
      type: 'number',
      control: {
        type: 'number',
      },
      description: '测试属性( 非组件或方法的属性 )',
    },
    left: {
      type: 'number',
      control: {
        type: 'number',
      },
      description: '测试属性( 非组件或方法的属性 )',
    },
    rect: {
      type: 'ClientRect',
      description: '',
    },
    domRef: {
      type: 'MutableRefObject<any> | null',
      description: '',
    },
  },
} satisfies Meta<typeof UseClientRect>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultProps: UseClientRectProps = {};

export const DefaultUseClientRect: Story = {
  args: {
    ...defaultProps,
  },
};
