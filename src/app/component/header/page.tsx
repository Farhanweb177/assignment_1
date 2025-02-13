import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center bg-yellow-300 h-20 justify-between'>
      <div className='  text-violet-700 font-extrabold'>
        <h1 className='text-3xl'>My Website</h1>
      </div>

      <div >
        <ul className='flex text-2xl px-4 font-bold text-fuchsia-700'>
           <Link href={"/"} className='ml-4'>Home</Link>
            <Link href={"/component/about"} className='ml-4'>About</Link>
            <Link href={"/component/services"} className='ml-4'>Services</Link>
            <Link href={"/component/contact"} className='ml-4'>contact Us</Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
