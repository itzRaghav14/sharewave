import React from 'react'
import Post from "./Post";
import { Posts } from "../../constants/dummy_data";

const PostsList = ({user, mode}) => {
  const posts = Posts;

  return (
    <div>
      {posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  )
}

export default PostsList
