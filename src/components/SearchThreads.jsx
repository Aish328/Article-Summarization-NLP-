import React from 'react'
import { Search } from 'lucide-react'
const SearchThreads = () => {
  return (
    <div className='relative'>
        <input placeholder={`Search your threads...`}
        className='pl-[56px] pr-10 py-2 outline-none border-none bg-[#a4c3b2] text-xl font-normal placeholder-gray-500 rounded-full text-gray-800'></input>
        <Search className='absolute top-3 left-5' color='rgb(107, 114, 128)'/>
    </div>
  )
}

export default SearchThreads
