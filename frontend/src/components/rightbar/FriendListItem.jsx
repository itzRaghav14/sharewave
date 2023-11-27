import React from 'react'

const FriendListItem = ({user}) => {
  return (
    <li className='flex items-center gap-5 p-2 hover:bg-secondary-300 cursor-pointer'>
      <div className='relative'>
        <img src={user.profilePicture} alt="friend-pfp" className='h-10 w-10 rounded-full object-cover' />
        <div className='h-3 w-3 rounded-full bg-lime-500 absolute top-0 right-0'></div>
      </div>
      <div>{user.username}</div>
    </li>
  )
}

export default FriendListItem
