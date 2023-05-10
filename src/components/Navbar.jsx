import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar w-full">
    <div className='mx-[24px] flex justify-between items-center h-[100px] md:mx-[100px]'>
      <h1 className='text-2xl font-bold'>IDEATE</h1>
      <div className="flex justify-between items-center md:w-[40%]">
        <a href="/">About</a>
        <a href="/">Products</a>
        <a href="/">Testimonials</a>
        <a href="/">Events</a>
        <button className='px-6 py-3 bg-yellow-500 text-black font-medium rounded-md'>Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
