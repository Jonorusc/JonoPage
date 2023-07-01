import type { Meta, StoryObj } from '@storybook/react'
import Project from '.'

const meta: Meta<typeof Project> = {
  title: 'Project',
  component: Project,
  args: {
    title: 'Project title',
    description: 'Project description',
    img: ['https://random.imagecdn.app/500/150'],
    slogan: 'project-slogan'
  }
}

export default meta
type Story = StoryObj<typeof Project>

export const Primary: Story = {
  render: (args) => <Project {...args} />
}
