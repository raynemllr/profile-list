import { User } from '@/lib/api'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from './three-d-card'
import { MotionDiv } from './ui/motion-div'

const UserProfileCard = ({ user }: { user: User }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <MotionDiv
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 0.5,
        ease: 'easeInOut',
        duration: 0.5
      }}
      viewport={{ amount: 0 }}
    >
      <CardContainer>
        <CardBody className='relative flex h-auto w-[20rem] flex-col items-center justify-center rounded-xl border border-black/[0.1] bg-gray-50 p-6 shadow-md hover:bg-gray-100'>
          <CardItem translateZ='150' className='mt-4'>
            <Image
              src={user.picture.large}
              height='500'
              width='500'
              quality={100}
              className='w-full rounded-xl object-cover group-hover/card:shadow-xl'
              alt='thumbnail'
            />
          </CardItem>

          <CardItem
            translateZ='50'
            className='mt-3 text-xl font-bold text-neutral-600 dark:text-white'
          >
            {user.name.first} {user.name.last},{' '}
            <span className='text-neutral-700'>{user.dob.age}</span>
          </CardItem>
          <CardItem
            translateZ='60'
            className='text-md font-semibold text-neutral-500 dark:text-white'
          >
            {user.email}
          </CardItem>

          <CardItem
            translateZ='100'
            as='button'
            className='mt-6 rounded-xl px-4 py-2 text-xs font-normal hover:text-orange-600 dark:text-white'
          >
            View details of {user.name.first} →
          </CardItem>
        </CardBody>
      </CardContainer>
    </MotionDiv>
  )
}
export default UserProfileCard
