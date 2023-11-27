import React from "react";
import FriendListItem from "./FriendListItem";
import {Users} from '../../constants/dummy_data';

const Rightbar = () => {
  const bdayImgUrl =
    "data:image/png;base64,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";
  const users = Users;
  
  return (
    <div className="flex-3.5 overflow-y-scroll">
      <div className="pl-5 pt-5 pr-3">
        <div className="flex items-center">
          <img src={bdayImgUrl} alt="bday-img" className="w-10 h-10 mr-5" />
          <span className="font-light">
            <b className="inline">User</b> and <b className="inline">3 other friends</b> have birthday today
          </span>
        </div>
        <div>
          <h4 className="text-lg font-semibold mt-6 mb-4">Online Friends</h4>
          <ul>
            {users.map (u => (
              <FriendListItem key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
