import React from 'react'
import SidebarList from './SidebarList';
import SidebarFriendList from './SidebarFriendList';

const Sidebar = () => {

  return (
    <div className='flex-2.5 overflow-y-scroll'>
      <SidebarList />
      <hr className='border-gray-300' />
      {/* <SidebarFriendList /> */}
    </div>
  )
}

export default Sidebar