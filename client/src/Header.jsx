import { Link } from "react-router-dom";
import Logo from "../src/assets/airbnb.svg";

export default function Header(){
  return(
    <div>
    <header className='py-4 px-10 flex justify-between border-b border-[#EBEBEB]-800'>
        <Link to={"/"} className="hidden md:flex items-center gap-2">
          <img src={Logo} alt="" className='w-8 text-primary '/>
          <span className='font-bold text-xl text-primary'>airbnb</span>
        </Link>
        <div className='text-xs mr-10 flex items-center gap-2 md:gap-4 border border-gray-300 rounded-full md:py-3 px-4 shadow-md shadow-gray-300 md:text-sm'>
          <div className="font-bold text-sm md:font-normal">Anywhere</div>
          <div className='hidden border-l border-gray-300 h-6 sm:block'></div>
          <div className="hidden sm:block">Any week</div>
          <div className='hidden border-l border-gray-300 h-6 sm:block'></div>
          <div className="hidden sm:block">Add guests</div>
          <button className='bg-primary text-white p-1 rounded-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4 flex flex-row-reverse">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          </button>
        </div>
        <Link to={"/login"} className='flex items-center gap-2 border border-gray-300 rounded-full py-3 px-4'>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div className='bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>
        </div>     

        </Link>
      </header>
    </div>
  )
}