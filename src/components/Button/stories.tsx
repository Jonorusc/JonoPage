import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

import { FaInstagram } from 'react-icons/fa'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    text: 'Button',
    onClick: () => console.log('clicked'),
    bgColor: 'darker',
    color: 'primary',
    fontSize: 'medium',
    fontWeight: 'normal',
    icon: <FaInstagram />
  },
  argTypes: {
    fontWeight: {
      control: {
        type: 'select',
        options: ['normal', 'bold', 'semiBold', 'light']
      }
    },
    fontSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'xlarge']
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => <Button {...args} />
}
