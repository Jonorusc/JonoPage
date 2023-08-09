import type { Meta, StoryObj } from '@storybook/react'
import DownloadCv from '.'

const meta: Meta<typeof DownloadCv> = {
  title: 'DownloadCv',
  component: DownloadCv,
  args: {
    resumes: {
      english: 'https://www.google.com',
      portuguese: 'https://www.google.com'
    },
    open: true
  }
}

export default meta
type Story = StoryObj<typeof DownloadCv>

export const Primary: Story = {
  render: (args) => <DownloadCv {...args} />
}
