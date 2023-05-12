import React from 'react'
import { IoCreate } from 'react-icons/io5'
import { RiSkullFill } from 'react-icons/ri'
import { SiPersistent } from 'react-icons/si'


const Values = () => {
  return (
    <div className='mx-[24px] my-[200px] md:mx-[100px] '>
      <h2 className='text-[24px] font-bold text-left md:text-center md:text-[36px] pb-6'>Here are 3 reasons why we are the best for your great ideas </h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
      <div className='md:col-span-1 bg-yellow-500 px-6 py-6 rounded-l-3xl'>
        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-black '>
       <IoCreate size={24} color='white'/>
        </div>
        <h2 className='text-lg font-bold py-2'>Creativity</h2>
        <p className='text-gray-700'>Innovators are often highly creative individuals who have a natural ability to come up with new and unique ideas. They are able to think outside the box and see things from a different perspective, which enables them to identify opportunities and develop innovative solutions to problems.</p>
        </div>

      <div className='md:col-span-1 bg-yellow-500 px-6 py-6'>
        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-black'>
       <RiSkullFill size={24} color='white' />
        </div>
        <h2 className='text-lg font-bold py-2'>Risk-taking</h2>
        <p className='text-gray-700'>Innovators are often highly creative individuals who have a natural ability to come up with new and unique ideas. They are able to think outside the box and see things from a different perspective, which enables them to identify opportunities and develop innovative solutions to problems.</p>
        </div>

      <div className='md:col-span-1 bg-yellow-500 px-6 py-6 rounded-r-3xl'>
        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-black'>
       <SiPersistent size={24} color='white' />
        </div>
        <h2 className='text-lg font-bold py-2'>Persistence</h2>
        <p className='text-gray-700'>Innovators are often highly creative individuals who have a natural ability to come up with new and unique ideas. They are able to think outside the box and see things from a different perspective, which enables them to identify opportunities and develop innovative solutions to problems.</p>
        </div>
    </div>
    </div>
  )
}

export default Values
