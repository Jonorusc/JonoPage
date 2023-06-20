import type { Meta, StoryObj } from '@storybook/react'
import File from '.'

const meta: Meta<typeof File> = {
  title: 'File',
  component: File,
  args: {
    name: 'file',
    types: ['image/png', 'image/jpeg'],
    label: 'Add image',
    multiple: true
  }
}

export default meta
type Story = StoryObj<typeof File>

export const Primary: Story = {
  render: (args) => <File {...args} />
}
