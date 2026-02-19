import React from 'react'
import { Link } from 'react-router-dom'
export default function FourPic() {
  return (
    <div className='  sm:justify-center sm:items-center justify-items-center gap-x-10  mt-60 md:flex'>
        <div  className='   w-50 sm:w-90 md:w-[500px] md:h-[32rem] my-5 md:my-0 sm:h-60 h-48 object-cover shadow-xl rounded-4xl overflow-hidden'><img className='w-full h-full' src={`${import.meta.env.BASE_URL}img/c4.jpg`} alt="" /></div>
        <div className='  w-50 sm:w-90 md:h-[32rem]  my-5 md:my-0 h-96 '>
            <div className=' md:h-[15.5rem] h-44   md:my-0  w-full object-cover shadow-xl  rounded-4xl overflow-hidden'><img className='w-full h-full' src={`${import.meta.env.BASE_URL}img/c5.jpg`} alt="" /></div>
            <div className='   md:h-[15.5rem] h-44 my-5 md:my-2   w-full object-cover shadow-xl  rounded-4xl overflow-hidden'><img className='w-full h-full' src={`${import.meta.env.BASE_URL}img/c6.jpg`} alt="" /></div>
        </div>
    </div>
  )
}

