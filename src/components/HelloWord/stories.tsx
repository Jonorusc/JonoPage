import type { Meta, StoryObj } from '@storybook/react'
import HelloWord from '.'

const meta: Meta<typeof HelloWord> = {
  title: 'HelloWord',
  component: HelloWord
}

export default meta
type Story = StoryObj<typeof HelloWord>

export const Primary: Story = {
  render: () => <HelloWord />
}
