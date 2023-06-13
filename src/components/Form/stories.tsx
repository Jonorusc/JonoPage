import type { Meta, StoryObj } from '@storybook/react'
import Form from '.'
import Input from '@/components/Input'
import { InputValue } from '@/types/form'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
  args: {
    onSubmit: (
      e?: React.FormEvent<HTMLFormElement>,
      formValues?: InputValue
    ) => {
      action('onSubmit')(e, formValues)
    },
    onReset: (
      e?: React.FormEvent<HTMLFormElement>,
      formValues?: InputValue
    ) => {
      action('onReset')(e, formValues)
    },
    resetName: 'Cancel',
    submitName: 'Login'
  }
}

export default meta
type Story = StoryObj<typeof Form>

export const Primary: Story = {
  render: (args) => (
    <Form {...args}>
      <div
        style={{
          display: 'flex',
          columnGap: '1rem'
        }}
      >
        <Input name="name" placeholder="Name" type="text" fontSize="medium" />
        <Input
          name="password"
          placeholder="password"
          type="password"
          fontSize="medium"
        />
      </div>
    </Form>
  )
}
