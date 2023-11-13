import React from 'react'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import { Outlet } from 'react-router-dom'
import Rightbar from '../components/Rightbar'

const Home = () => {
  return (
    <div className='min-h-screen bg-complementary-200 dark:bg-black dark:text-white'>
      <Navbar />
      <div className='flex'>
        <Leftbar />
        <Outlet />
        <Rightbar />
      </div>
    </div>
  )
}

export default Home
