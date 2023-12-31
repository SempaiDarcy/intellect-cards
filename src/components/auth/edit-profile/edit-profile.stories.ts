import avatar from '@/assets/avatar96x96.png'
import { EditProfile } from '@/components/auth/edit-profile/edit-profile'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: EditProfile,
  tags: ['autodocs'],
  title: 'Auth/Edit-profile',
} satisfies Meta<typeof EditProfile>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    edit: false,
    emailUser: 'j&johnson@gmail.com',
    imgAvatar: avatar,
    nameUser: 'Ivan',
  },
}

export const Edit: Story = {
  args: {
    edit: true,
    emailUser: 'j&johnson@gmail.com',
    imgAvatar: avatar,
    nameUser: 'Ivan',
  },
}
