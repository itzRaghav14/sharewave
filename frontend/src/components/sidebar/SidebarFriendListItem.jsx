import React from "react";

const SidebarFriendListItem = () => {
  const imgUrl =
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg";
  
  const friendName = "Friend"

  return (
    <li className="flex items-center px-6 py-3 space-x-5 hover:bg-gray-200 cursor-pointer">
      <img src={imgUrl} alt="friend-pfp" className="h-6 w-6 rounded-full" />
      <span>{friendName}</span>
    </li>
  );
};

export default SidebarFriendListItem;
