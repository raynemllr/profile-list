import { getUser } from '@/lib/api'

import DetailedProfileCard from '@/components/detailed-profile-card'

export default async function Page({ params }: { params: { userId: string } }) {
  const user = await getUser(params.userId)

  return <DetailedProfileCard user={user[0]} />
}
