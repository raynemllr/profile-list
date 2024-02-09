import SearchInput from '@/components/search-input'
import { TypewriterEffect } from '@/components/ui/typewritter-effect'
import UserProfileGrid from '@/components/user-profile-grid'
import { Suspense } from 'react'
import Loading from './loading'

const words = [
  {
    text: 'Find'
  },
  {
    text: 'a'
  },
  {
    text: 'random'
  },
  {
    text: 'profile'
  },
  {
    text: 'here!',
    className: 'text-blue-500 dark:text-blue-500'
  }
]

export default function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const search =
    typeof searchParams.search === 'string' ? searchParams.search : undefined

  return (
    <Suspense fallback={<Loading />}>
      <div className='h-full min-h-screen bg-dot-black/[0.2]'>
        <div className='py-10'>
          <TypewriterEffect words={words} />
        </div>

        <div className='my-5 flex items-center justify-around'>
          <SearchInput search={search} />
        </div>

        <UserProfileGrid search={search} />
      </div>
    </Suspense>
  )
}
