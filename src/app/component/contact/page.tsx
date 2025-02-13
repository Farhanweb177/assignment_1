import React from 'react';
import Header from '../header/page';
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <div>
        <Header></Header>
 <div className='bg-green-400 text-red-400 font-bold text-5xl flex justify-center items-center h-[500px]'>
      <h1>
        This is contact  page.
      </h1>
    </div>
    
    </div>
   <div>
    <h1 className='bg-cyan-400 text-4xl w-[250px] rounded-3xl'>
    <Link href={"/component/contact/help"} >Help Center</Link>
    </h1>
   </div>
    </div>
  )
}

export default Contact
