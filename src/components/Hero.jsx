import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="w-full h-screen  ">
    <Navbar />
      <div className=" h-screen text-left md:h-[calc(100vh-100px)] mx-[24px] grid grid-cols-1 gap-4  md:grid-cols-2 md:mx-[100px] md:content-center">
        <div className="">
          <h2 className="text-[32px] font-bold md:text-[42px] ">
            Changing the world with innovative concepts and quality digital
            products
          </h2>
          <p className="text-gray-500 py-4">
            We offer a welcoming environment where you can display your skills,
            meet people who share your interests, and get the tools you need to
            transform your ideas into products and businesses.
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-md">
            Get in touch
          </button>
        </div>   

        <div className="border ">
          <img
            className="w-[100%] "
            src="https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
