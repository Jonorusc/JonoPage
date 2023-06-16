import type { Meta, StoryObj } from '@storybook/react'
import Text from '.'
import { FaInstagram } from 'react-icons/fa'

const meta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'xlarge']
      }
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'green',
          'dark',
          'lightGreen',
          'grey',
          'darker',
          'darkenBlue',
          'whiteSmoke',
          'black',
          'error'
        ]
      }
    },
    icon: {
      control: {
        type: 'select',
        options: [null]
      }
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    },
    gap: {
      t: {
        type: 'string'
      }
    },
    isTitle: {
      type: 'boolean'
    },
    uppercase: {
      control: {
        type: 'boolean'
      }
    },
    m: {
      type: 'string'
    },
    mt: {
      type: 'string'
    },
    mb: {
      type: 'string'
    },
    mr: {
      type: 'string'
    },
    ml: {
      type: 'string'
    }
  },
  args: {
    children: 'FaInstagram',
    size: 'small',
    color: 'darker',
    icon: <FaInstagram />,
    iconPosition: 'left',
    gap: '0.5rem',
    isTitle: false,
    uppercase: false,
    m: '',
    mt: '',
    mb: '',
    mr: '',
    ml: ''
  }
}

export default meta
type Story = StoryObj<typeof Text>

export const Primary: Story = {
  render: (args) => <Text {...args} />
}
