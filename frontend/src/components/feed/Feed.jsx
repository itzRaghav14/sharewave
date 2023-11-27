import React from "react";
import Share from "./Share";
import Post from "./Post";
import { Posts } from "../../constants/dummy_data";

const Feed = () => {
  const posts = Posts;

  return (
    <div className="flex-6 p-3 overflow-auto">
      <Share />
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
};

export default Feed;
