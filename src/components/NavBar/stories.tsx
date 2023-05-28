import type { Meta, StoryObj } from '@storybook/react'
import NavBar from '.'

const meta: Meta<typeof NavBar> = {
  title: 'NavBar',
  component: NavBar
}

export default meta
type Story = StoryObj<typeof NavBar>

export const Primary: Story = {
  render: () => <NavBar />
}
