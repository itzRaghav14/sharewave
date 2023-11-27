import React from "react";

const SidebarListItem = ({Icon, text}) => {
  return (
    <li className="flex items-center px-6 py-3 space-x-5 hover:bg-secondary-300 cursor-pointer">
      <Icon />
      <span>{text}</span>
    </li>
  );
};

export default SidebarListItem;
