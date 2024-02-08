import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { User } from '@/lib/api'
import { cn } from '@/lib/utils'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

const DetailedProfileCard = ({ user }: { user: User }) => {
  const isUserFemale = user.gender === 'female'

  return (
    <>
      <div className='flex h-full min-h-screen w-full flex-col items-center justify-center py-4 bg-grid-small-black/[0.2]'>
        <div className='flex w-11/12 py-5 md:w-3/4 lg:w-[50rem] lg:py-0'>
          <Link
            href='/'
            className={cn(buttonVariants({ variant: 'link' }), '')}
          >
            ← Go back
          </Link>
        </div>

        <Card className='w-11/12 shadow-lg md:w-3/4 lg:h-[35rem] lg:w-[50rem] lg:border-neutral-300'>
          <CardContent className='flex h-full flex-col space-x-5 py-5 lg:flex-row'>
            <div className='flex h-full flex-col items-center lg:w-[38%] lg:pt-16'>
              <Image
                src={user.picture.large}
                quality={100}
                width={230}
                height={230}
                alt='Profile picture'
                className='rounded-full shadow'
              />

              <h3 className='mt-4 text-xl font-semibold'>
                {user.name.first} {user.name.last}{' '}
                <span
                  className={cn(
                    isUserFemale ? 'text-pink-500' : 'text-blue-500'
                  )}
                >
                  {isUserFemale ? '♀' : '♂'}
                </span>
              </h3>

              <h2 className='font-medium text-gray-400'>
                @{user.login.username}
              </h2>
            </div>

            <Separator orientation='vertical' className='hidden lg:block' />
            <Separator orientation='horizontal' className='my-4 lg:hidden' />

            <div className='space-y-5 px-2 pt-4 lg:w-[62%]'>
              <div>
                <div className='px-4 sm:px-0'>
                  <h3 className='text-center text-base font-semibold leading-7 text-gray-900 lg:text-start'>
                    User Information
                  </h3>
                  <p className='mt-1 max-w-2xl text-center text-sm leading-6 text-gray-500 lg:text-start'>
                    Personal details and location.
                  </p>
                </div>
                <div className='mt-6 border-t border-gray-100'>
                  <dl className='divide-y divide-gray-100'>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                      <dt className='text-center text-sm font-medium leading-6 text-gray-900 lg:text-start'>
                        Email Address
                      </dt>
                      <dd className='mt-1 text-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 lg:text-start'>
                        {user.email}
                      </dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                      <dt className='text-center text-sm font-medium leading-6 text-gray-900 lg:text-start'>
                        Phone Number
                      </dt>
                      <dd className='mt-1 text-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 lg:text-start'>
                        {user.phone}
                      </dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                      <dt className='text-center text-sm font-medium leading-6 text-gray-900 lg:text-start'>
                        Date of Birth
                      </dt>
                      <dd className='mt-1 text-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 lg:text-start'>
                        {`${dayjs(user.dob.date).format('MMMM DD, YYYY')} (Age: ${user.dob.age})`}
                      </dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                      <dt className='text-center text-sm font-medium leading-6 text-gray-900 lg:text-start'>
                        Nationality
                      </dt>
                      <dd className='mt-1 text-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 lg:text-start'>
                        {user.nat}
                      </dd>
                    </div>
                    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
                      <dt className='text-center text-sm font-medium leading-6 text-gray-900 lg:text-start'>
                        Address
                      </dt>
                      <dd className='mt-1 text-center text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 lg:text-start'>
                        {`#${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.state}, ${user.location.country}`}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
export default DetailedProfileCard
