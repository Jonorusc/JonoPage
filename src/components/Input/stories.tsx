import type { Meta, StoryObj } from '@storybook/react'
import Input from '.'

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  args: {
    hasError: false,
    isDisabled: false,
    placeholder: 'placeholder',
    value: 'value',
    type: 'text',
    name: 'name',
    onInputChange: () => console.log('test'),
    fontSize: 'medium'
  },
  argTypes: {
    onInputChange: { action: 'changed' },
    value: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'textarea']
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  render: (args) => <Input {...args} />
}
