import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-20 border-b border-zinc-800 relative flex items-center justify-between'>
       <a href="#" className='text-white text-2xl pl-5 font-["Aeonik"] font-medium cursor-pointer no-underline'>AnimationFlow</a>
       <div className='flex items-center gap-x-5 pr-5'>
        <button className='text-white font-["Aeonik"] hover:bg-gray-700 border-none rounded p-2 transition-all'>Login</button>
        <button className='text-white font-["Aeonik"] hover:bg-gray-700 border-none rounded p-2 transition-all'>Sign Up</button>
       </div>
    </div>
  )
}

export default Header