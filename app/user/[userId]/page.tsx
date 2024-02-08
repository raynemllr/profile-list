import { getUser } from '@/lib/api'

import DetailedProfileCard from '@/components/detailed-profile-card'
import { Suspense } from 'react'
import Loading from './loading'

export default async function Page({ params }: { params: { userId: string } }) {
  const user = await getUser(params.userId)

  return (
    <Suspense fallback={<Loading />}>
      <DetailedProfileCard user={user[0]} />
    </Suspense>
  )
}
