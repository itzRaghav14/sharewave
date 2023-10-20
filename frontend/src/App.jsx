import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);

function App() {

  const handleClick = () => {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div>
      <button className="absolute right-10 top-6 h-8 w-8 text-center bg-green-500 rounded-full" onClick={handleClick}></button>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
