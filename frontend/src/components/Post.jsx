import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { PiShareFatBold } from "react-icons/pi";

const LikeButton = ({ liked, onClick }) => {
  if (liked) return <AiFillHeart onClick={onClick} />;
  else return <AiOutlineHeart onClick={onClick} />;
};

const Post = () => {
  let pfpImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEBrVjihcSZNu9x9zv2fO7VF-8Nqq8Yo3KhIhGq0&s";
  let name = "User";
  let time = "1m";
  let postContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore laudantium optio ducimus esse veniam vero cupiditate nobis incidunt reprehenderit ullam ipsa reiciendis sit tempora consequatur, vel quaerat alias dolores sunt autem qui hic? Laudantium esse laborum ab molestiae, sit aperiam ullam illum, adipisci laboriosam consequatur, voluptatem ipsam ea sint cupiditate.";
  let [likeCount, setLikeCount] = useState(50);
  let commentsCount = 10;
  let [liked, setLiked] = useState(0);

  const handleLikeButtonClick = () => {
    setLikeCount(likeCount + 1 - 2 * liked);
    setLiked(1 - liked);
  };

  return (
    <div className="w-11/12 p-4 flex flex-col items-center gap-4 bg-white dark:bg-complementary-800 rounded-md shadow-lg">
      {/* Post */}
      {/* Header */}
      {/* pfpImage, name, time and triple dot */}
      <div className="w-full flex items-center gap-4">
        <div>
          <img src={pfpImage} alt="pfp" className="h-10 w-10 rounded-full" />
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="text-lg font-medium">{name}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">{time} ago</p>
        </div>
        <BsThreeDots className="text-xl" />
      </div>
      {/* Text */}
      <p className="w-full">{postContent}</p>

      {/* Image or Video */}
      <div className="w-full">{/* Badme dekha jayega */}</div>

      {/* Like comment subscribe */}
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-1 justify-center items-center gap-2">
          {}
          <LikeButton
            liked={liked}
            onClick={handleLikeButtonClick}
            className="text-lg md:text-2xl"
          />
          {likeCount}
        </div>
        <div className="flex flex-1 justify-center items-center gap-2">
          <BiCommentDetail className="text-lg md:text-2xl" />
          {commentsCount}
        </div>
        <div className="flex flex-1 justify-center items-center gap-2">
          <PiShareFatBold className="text-lg md:text-2xl" />
          Share
        </div>
      </div>
    </div>
  );
};

export default Post;
