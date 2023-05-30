import type { Meta, StoryObj } from '@storybook/react'
import NavBar from '.'

const meta: Meta<typeof NavBar> = {
  title: 'NavBar',
  component: NavBar,
  argTypes: {
    img: {
      type: 'string'
    }
  },
  args: {
    img: 'https://random.imagecdn.app/500/150',
    brand: 'DevByLucas'
  }
}

export default meta
type Story = StoryObj<typeof NavBar>

export const Primary: Story = {
  render: (args) => <NavBar {...args} />
}
