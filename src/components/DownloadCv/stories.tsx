import type { Meta, StoryObj } from '@storybook/react'
import DownloadCv from '.'

const meta: Meta<typeof DownloadCv> = {
  title: 'DownloadCv',
  component: DownloadCv
}

export default meta
type Story = StoryObj<typeof DownloadCv>

export const Primary: Story = {
  render: () => <DownloadCv />
}
