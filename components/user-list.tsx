'use client'

import { User } from '@/lib/api'
import UserProfileCard from './user-profile-card'

const UserList = ({ users }: { users: User[] }) => {
  return (
    <>
      {users.map(user => (
        <UserProfileCard key={user.login.uuid} user={user} />
      ))}
    </>
  )
}
export default UserList
