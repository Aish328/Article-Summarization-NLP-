import React from 'react';
import { NavLink } from 'react-router-dom';
import svglogo from '../logo/png/zeitgeist-high-resolution-logo-transparent (1).png';
import { Search, Radar, LibrarySquare, LogIn} from 'lucide-react';
const NavBar = () => {
    let isLoggedIn = false;

  return (
    <div className='flex sm:flex-col w-screen sm:w-1/5 md:w-1/6 bg-[#a4c3b2] h-[5%] sm:h-screen text-[#55609E]'>
        <div className='mx-auto  my-5'>
            <img src={svglogo} className='mx-5 w-[220px]' alt="Company Logo"/>
        </div>
        <nav>
            <ul className='flex flex-col gap-y-1.5'>
                <NavLink to={'/'}><button className='flex w-[90%] mx-auto ease-linear duration-150 hover:bg-[#6b9080] text-lg font-medium py-2 rounded-md pl-5 text-[#1d2e28]'><span className='mt-1 pr-1'><Search className='w-[18px]'/></span>Home</button></NavLink>
                <NavLink to={'/discover'}><button className='flex w-[90%] mx-auto ease-linear duration-150 hover:bg-[#274135] text-lg font-medium py-2 rounded-md pl-5 text-[#1d2e28]'><span className='mt-1 pr-1'><Radar className='w-[18px]'/></span>Discover</button></NavLink>
                <NavLink to={'/threads'}><button className='flex w-[90%] mx-auto ease-linear duration-150 hover:bg-[#6b9080] text-lg font-medium py-2 rounded-md pl-5 text-[#1d2e28]'><span className='mt-1 pr-1'><LibrarySquare className='w-[18px]'/></span>Library</button></NavLink>
                { !isLoggedIn && 
                    <NavLink to={'/signin'}><button className='flex w-[90%] mx-auto ease-linear duration-150 hover:bg-[#6b9080] text-lg font-medium py-2 rounded-md pl-5 text-[#1d2e28]'><span className='mt-1 pr-1'><LogIn className='w-[18px]'/></span>Sign In</button></NavLink>
                }
            </ul>
            { !isLoggedIn && 
                <NavLink to={'/signup'}><button className='bg-[#4c6d5f] hover:bg-[#52796f] rounded-3xl w-[80%] mx-[10%] sm:mt-8 font-medium text-lg text-slate-300 py-1.5 px-1 shadow-md'>Sign up</button></NavLink>
            }
        </nav>
        { isLoggedIn && <div>Account</div>}
    </div>
  )
}

export default NavBar