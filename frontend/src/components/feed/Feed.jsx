import React from "react";
import Share from "./Share";
import PostsList from "./PostsList";

const Feed = () => {
  return (
    <div className="flex-6 p-3 overflow-auto">
      <Share />
      <PostsList />
    </div>
  );
};

export default Feed;
