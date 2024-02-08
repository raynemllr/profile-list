'use client'

import { Input } from './ui/input'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'

const SearchInput = ({ search }: { search?: string }) => {
  const router = useRouter()
  const initialRender = useRef(true)

  const [text, setText] = useState(search)
  const [query] = useDebounce(text, 750)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!query) {
      router.push(`/`)
    } else {
      router.push(`/?search=${query}`)
    }
  }, [query])

  return (
    <Input
      type='text'
      value={text}
      onChange={e => setText(e.target.value)}
      placeholder='Search name...'
      className='w-2/3 border-slate-600 shadow-md md:w-1/2 lg:w-1/4'
    />
  )
}
export default SearchInput
