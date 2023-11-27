import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/sidebar/Sidebar";
import Feed from "../components/feed/Feed";
import Rightbar from "../components/rightbar/Rightbar";
import FriendList from "../components/rightbar/FriendList";

const Profile = () => {
  const coverImg =
    "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=800";
  const profilePicture =
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800";

  return (
    <div className="w-screen h-screen">
      <Topbar />
      <div className="flex h-11/12">
        <Sidebar className="h-full" />
        <div className="flex-9.5 h-full overflow-scroll">
          <div className="mb-6">
            <div className="h-80 w-full relative mb-12">
              <img
                src={coverImg}
                alt="cover-img"
                className="w-full h-64 object-cover"
              />
              <img
                src={profilePicture}
                alt="profile-img"
                className="h-60 w-60 object-cover absolute rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 m-auto border-4 border-white"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-2xl font-bold">Username</h4>
              <span className="font-light">profile description</span>
            </div>
          </div>
          <div className="flex overflow-scroll">
            <Feed />
            <div className="flex-3.5 pl-5 pt-5 pr-3 overflow-scroll">
              <FriendList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
