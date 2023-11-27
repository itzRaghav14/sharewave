import React from "react";
import SidebarListItem from "./SidebarListItem";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import ExploreIcon from '@mui/icons-material/Explore';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const SidebarList = () => {
  return (
    <ul className="">
      <SidebarListItem Icon={RssFeedIcon} text="Feed" />
      <SidebarListItem Icon={ChatIcon} text="Chats" />
      <SidebarListItem Icon={GroupIcon} text="Groups" />
      <SidebarListItem Icon={ExploreIcon} text="Explore" />
      <SidebarListItem Icon={PersonIcon} text="Bookmarks" />
      <SidebarListItem Icon={HelpOutlinedIcon} text="FAQs" />
      <SidebarListItem Icon={WorkOutlinedIcon} text="Jobs" />
      <SidebarListItem Icon={EmojiEventsIcon} text="Events" />
      <SidebarListItem Icon={DarkModeIcon} text="Darkmode" />
    </ul>
  );
};

export default SidebarList;
