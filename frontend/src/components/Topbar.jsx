import React from 'react';
import { MdSearch } from "react-icons/md";
import { IoPerson, IoChatbubble, IoNotifications } from "react-icons/io5";

const Topbar = () => {

  const userImg = "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg";

  return (
    <div className='w-full h-1/12 bg-primary-500 flex items-center'>
      <div className='flex-3'>
        <span className='text-2xl ml-5 font-bold text-white cursor-pointer'>Sharewave</span>
      </div>

      <div className='flex-5'>
        <div className='w-full h-8 bg-white rounded-3xl flex items-center'>
          <MdSearch className='text-xl ml-2.5' />
          <input type="text" placeholder='Search ...' className='w-3/4 outline-none' />
        </div>
      </div>

      <div className='flex-4 flex justify-around items-center text-white'>
        <div className='mr-2.5 text-sm cursor-pointer flex items-center gap-3'>
          <span>Homepage</span>
          <span>Timeline</span>
        </div>
        <div className='flex gap-4'>
          <div className='w-8 h-8 cursor-pointer relative flex items-center'>
            <IoPerson className='w-5 h-5' />
            <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute top-0 right-0 flex items-center justify-center text-xs'>1</span>
          </div>
          <div className='w-8 h-8 cursor-pointer relative flex items-center'>
            <IoChatbubble className='w-5 h-5' />
            <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute top-0 right-0 flex items-center justify-center text-xs'>1</span>
          </div>
          <div className='w-8 h-8 cursor-pointer relative flex items-center'>
            <IoNotifications className='w-5 h-5' />
            <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute top-0 right-0 flex items-center justify-center text-xs'>1</span>
          </div>
        </div>
        <img src={userImg} alt="pfp" className='w-8 h-8 rounded-full bg-cover cursor-pointer' />
      </div>
    </div>
  )
}

export default Topbar
