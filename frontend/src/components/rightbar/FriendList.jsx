import React from "react";
import FriendListItem from "./FriendListItem";
import {Users} from '../../constants/dummy_data';

const FriendList = () => {
  const users = Users;

  return (
    <div>
      <h4 className="text-lg font-semibold mt-6 mb-4">Online Friends</h4>
      <ul>
        {users.map((u) => (
          <FriendListItem key={u.id} user={u} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
