import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  return (
    <div className='flex h-full min-h-screen w-full flex-col items-center justify-center space-y-2 py-4 bg-grid-small-black/[0.2]'>
      <div className='flex w-11/12 py-5 md:w-3/4 lg:w-[50rem] lg:py-0'>
        <Skeleton className='mt-4 h-8 w-[10rem] bg-gray-500' />
      </div>

      <Skeleton className='h-[20rem] w-11/12 bg-gray-500 md:w-3/4 lg:h-[35rem] lg:w-[50rem]' />
    </div>
  )
}
export default Loading
