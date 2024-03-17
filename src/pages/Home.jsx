import React from 'react'
import NavBar from '../components/NavBar'
import SearchComponent from '../components/SearchComponent'
const Home = () => {
  return (
    <div className='w-screen h-screen flex gap-x-2'>
        <NavBar />
        <div className='w-[82%] h-[98%] my-[0.5%] bg-[#6b9080] border rounded-md flex justify-center items-center'>      
              <SearchComponent/>
        </div>
    </div>
  )
}

export default Home