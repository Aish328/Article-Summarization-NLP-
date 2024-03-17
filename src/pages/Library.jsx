import React from 'react'
import NavBar from '../components/NavBar'
import { LibrarySquare } from 'lucide-react'
import SearchThreads from '../components/SearchThreads';

const Library = () => {
  return (
    <div className='w-screen h-screen flex gap-x-2'>
      <NavBar/>
      <div className='w-[82%] h-[98%] my-[0.5%] bg-[#6b9080] border rounded-md  flex justify-center items-start'>
        <header className='w-[100%] h-[15%] py-5 px-10 border-b border-[#d3e1db]'>
          <div className='flex justify-between items-center text-3xl font-bold mt-4 mx-5'>
            <div className='flex text-[#FFF]'><LibrarySquare size={50}/><span>Library</span></div>
            <SearchThreads />
          </div> 
      </header>
      <section>
        <div></div>
        <div></div>
      </section>
      </div>
      
    </div>
  )
}

export default Library