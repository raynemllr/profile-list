import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex h-full min-h-screen flex-col items-center justify-center bg-dot-black/[0.2]'>
      <Image
        src={'/not-found.png'}
        width={300}
        height={300}
        quality={100}
        priority
        alt='Not found image'
      />
      <h2 className='mt-2 text-3xl font-bold'>Page Not Found</h2>
      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'link' }),
          'text-md mt-4 hover:text-orange-600'
        )}
      >
        Return Home →
      </Link>
    </div>
  )
}
