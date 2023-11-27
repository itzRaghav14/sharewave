import React from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import ShareOptions from "./ShareOptions";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

const Share = () => {
  const imgUrl =
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg";

  return (
    <div className="w-full h-44 rounded-xl shadow-md border-0.5 border-gray-200 pt-2.5 mb-6 px-6">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2.5 my-2">
          <img
            src={imgUrl}
            alt="share-img"
            className="w-12 h-12 rounded-full object-cover"
          />
          <input
            type="text"
            placeholder="What is in your mind?"
            className="flex-1 outline-none"
          />
        </div>
        <hr />
        <div className="flex-1 flex items-center justify-between font-medium flex-wrap">
          <div className="flex items-center justify-between gap-2.5">
            <ShareOptions
              Icon={CollectionsIcon}
              text="Photo or Video"
              iconColor="tomato"
            />
            <ShareOptions Icon={LabelIcon} text="Tags" iconColor="blue" />
            <ShareOptions Icon={RoomIcon} text="Location" iconColor="green" />
            <ShareOptions
              Icon={EmojiEmotionsIcon}
              text="Feelings"
              iconColor="goldenrod"
            />
          </div>
          <button className="px-2 py-1 bg-primary-500 text-white rounded-lg hover:bg-primary-700 duration-300 ease-in">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
