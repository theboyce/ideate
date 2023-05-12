import React from 'react'
import { IoCreate } from 'react-icons/io5'
import { RiSkullFill } from 'react-icons/ri'
import { SiPersistent } from 'react-icons/si'


const Values = () => {
  return (
    <div className='mx-[24px] md:mx-[100px] '>
      <h2 className='text-[42px] font-bold text-center max-w-[60%] '>Here are 3 reasons why we are the best
for your great ideas </h2>
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div className='md:col-span-1 bg-black-300'>
        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-yellow-500'>
       <IoCreate size={24} color='white'/>
        </div>
        <h2 className='text-lg font-bold'>Creativity</h2>
        <p>Innovators are often highly creative individuals who have a natural ability to come up with new and unique ideas. They are able to think outside the box and see things from a different perspective, which enables them to identify opportunities and develop innovative solutions to problems.</p>
        </div>

      <div className='md:col-span-1 bg-black-300'>
        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-yellow-500'>
       <RiSkullFill size={24} color='white' />
        </div>
        <h2 className='text-lg font-bold'>Risk-taking</h2>
        <p>Innovators are often highly creative individuals who have a natural ability to come up with new and unique ideas. They are able to think outside the box and see things from a different perspective, which enables them to identify opportunities and develop innovative solutions to problems.</p>
        </div>

      <div className='md:col-span-1 bg-black-300'>
        <div className='h-[50px] w-[50px] rounded-full flex justify-center items-center bg-yellow-500'>
       <SiPersistent size={24} color='white' />
        </div>
        <h2 className='text-lg font-bold'>Persistence</h2>
        <p>Innovators are often highly creative individuals who have a natural ability to come up with new and unique ideas. They are able to think outside the box and see things from a different perspective, which enables them to identify opportunities and develop innovative solutions to problems.</p>
        </div>
    </div>
    </div>
  )
}

export default Values
