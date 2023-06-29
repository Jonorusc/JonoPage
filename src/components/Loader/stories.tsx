import type { Meta, StoryObj } from '@storybook/react'
import Loader from '.'

const meta: Meta<typeof Loader> = {
  title: 'Loader',
  component: Loader,
  args: {
    message: 'Loading...',
    visible: true
  }
}

export default meta
type Story = StoryObj<typeof Loader>

export const Primary: Story = {
  render: (args) => <Loader {...args} />
}
