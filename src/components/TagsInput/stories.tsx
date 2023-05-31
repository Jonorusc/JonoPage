import type { Meta, StoryObj } from '@storybook/react'
import TagsInput from '.'

const meta: Meta<typeof TagsInput> = {
  title: 'TagsInput',
  component: TagsInput,
  args: {
    initialTags: ['https://www.youtube.com/@DevByLucas'],
    placeholder: 'Add a tag',
    onChange: (tags) => console.log(tags),
    disabled: false
  }
}

export default meta
type Story = StoryObj<typeof TagsInput>

export const Primary: Story = {
  render: (args) => <TagsInput {...args} />
}
