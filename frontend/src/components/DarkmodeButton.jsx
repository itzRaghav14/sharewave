import React from "react";

const DarkmodeButton = () => {

  const handleClick = () => {
    localStorage.theme = localStorage.theme === 'light' ? 'dark' : 'light';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button
      className="absolute right-10 top-6 h-8 w-8 text-center bg-green-500 rounded-full"
      onClick={handleClick}
    ></button>
  );
};

export default DarkmodeButton;
