import type { Meta, StoryObj } from '@storybook/react'
import Notify from '.'

const meta: Meta<typeof Notify> = {
  title: 'Toast',
  component: Notify,
  args: {
    message: 'Toast',
    type: 'success',
    duration: 2000,
    position: 'bottom',
    visible: true
  },
  argTypes: {
    visible: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Notify>

export const Primary: Story = {
  render: (args) => <Notify {...args} />
}
