import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import {Users} from "../../constants/dummy_data";

const Post = ({post}) => {
  const [like, setLike] = useState (post.like);
  const [isLiked, setIsLiked] = useState (false);
  let LikeIcon = isLiked ? ThumbUpIcon : ThumbUpOutlinedIcon;

  const user = Users.filter (u => u.id === post.userId)[0];

  const likeHandler = () => {
    setLike (isLiked ? like - 1 : like + 1);
    setIsLiked (!isLiked);
  }

  return (
    <div className="rounded-xl shadow-md border border-gray-200 p-4 mb-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <img
              src={user.profilePicture}
              alt="user-pfp"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="mx-2.5">{user.username}</span>
            <span className="text-xs">{post.date}</span>
          </div>
          <div>
            <MoreVertIcon />
          </div>
        </div>
        <div className="mx-2">
          <span>{post?.desc}</span>
          {post.photo && <img src={post.photo} alt="post-img" className="mt-3 w-full object-contain max-h-96 bg-black" />}
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center gap-4 cursor-pointer border-r-0.5 border-gray-500">
            <LikeIcon className="text-xl" onClick={likeHandler} />
            <span className="font-medium">{like} likes</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-4 cursor-pointer">
            <CommentIcon />
            <span className="font-medium">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
