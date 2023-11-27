import React from "react";

const ShareOptions = ({Icon, text, iconColor}) => {
  return (
    <div className="flex items-center cursor-pointer gap-2.5">
      <Icon htmlColor={iconColor} className="text-xl" />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default ShareOptions;
