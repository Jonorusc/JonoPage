import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Dialog from '.'

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
  args: {
    open: true,
    title: 'Dialog title',
    onYes: () => action('Yes')('yes button triggered'),
    onNo: () => action('No')('no button triggered')
  }
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Primary: Story = {
  render: (args) => <Dialog {...args} />
}
