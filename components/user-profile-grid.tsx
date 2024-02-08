import { User, getUsers } from '@/lib/api'
import Link from 'next/link'
import UserProfileCard from './user-profile-card'
import Image from 'next/image'

const UserProfileGrid = async ({ search }: { search: string | undefined }) => {
  const users = await getUsers({ query: search })

  return (
    <>
      {users.length === 0 ? (
        <div className='itesm-center flex flex-col items-center justify-center text-black'>
          <Image
            src='/empty.png'
            width={200}
            height={200}
            quality={100}
            priority
            alt='Empty record image'
          />
          <h1 className='mt-3 text-2xl font-semibold text-slate-600'>
            No records found
          </h1>
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {users.map((user: User) => (
            <Link href={`/user/${user.login.uuid}`} key={user.login.uuid}>
              <UserProfileCard user={user} />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
export default UserProfileGrid
