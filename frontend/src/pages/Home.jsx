import React from 'react'
import Navbar from '../components/Navbar'
import Leftbar from '../components/Leftbar'
import { Outlet } from 'react-router-dom'
import Rightbar from '../components/Rightbar'

const Home = () => {
  return (
    <div>
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
