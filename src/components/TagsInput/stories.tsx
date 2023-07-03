import type { Meta, StoryObj } from '@storybook/react'
import TagsInput from '.'

const handleTagsChange = (newTags: string[]) => {
  console.log(newTags)
}

const meta: Meta<typeof TagsInput> = {
  title: 'TagsInput',
  component: TagsInput,
  args: {
    initialTags: ['https://www.youtube.com/@DevByLucas'],
    placeholder: 'Add a tag',
    onChange: handleTagsChange,
    disabled: false,
    name: 'tags'
  }
}

export default meta
type Story = StoryObj<typeof TagsInput>

export const Primary: Story = {
  render: (args) => <TagsInput {...args} />
}
