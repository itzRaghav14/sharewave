import React from "react";
import Posts from "../components/Posts";

const Feed = () => {
  return (
    <div className="flex-2 bg-complementary-200 dark:bg-black flex flex-col items-center">
      Feed
      <Posts />
    </div>
  );
};

export default Feed;
