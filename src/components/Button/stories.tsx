import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from '.'

import { FaInstagram } from 'react-icons/fa'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    text: 'Button',
    onClick: (event) => action('clicked')(event),
    bgcolor: 'darker',
    color: 'primary',
    fontSize: 'medium',
    fontWeight: 'normal',
    icon: <FaInstagram />,
    type: 'button'
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
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset']
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: (args) => <Button {...args} />
}
