import { Skeleton } from '@/components/ui/skeleton'

const Loading = () => {
  const skeletonCount = 8

  return (
    <div className='bg-dot-black/[0.2]'>
      <div className='flex items-center justify-center py-10'>
        <Skeleton className='h-16 w-[25rem] bg-gray-500 lg:w-[55rem]' />
      </div>
      <div className='flex items-center justify-center'>
        <Skeleton className='h-10 w-[20rem] bg-gray-500' />
      </div>

      <div className='flex items-center justify-center'>
        <div className='mt-16 grid grid-cols-1 gap-4 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {[...Array(skeletonCount)].map((_, index) => (
            <Skeleton key={index} className='h-[20rem] w-[20rem] bg-gray-500' />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Loading
