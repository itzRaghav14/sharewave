import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'

const Home = () => {
  return (
    <div className='w-screen h-screen'>
      <Topbar />
      <div className='h-11/12 flex w-full'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  )
}

export default Home
