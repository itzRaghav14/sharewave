import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen w-full bg-complementary-600 dark:bg-complementary-800 flex justify-center items-center p-4">
      <div className="max-w-xs md:max-w-md bg-white dark:bg-complementary-300 p-4 md:p-8 rounded-lg shadow-md">
        {/* Heading */}
        <h1 className="text-3xl text-center font-bold text-primary-600 dark:text-primary-600">
          Sharewave
        </h1>
        <p className="text-center mb-8 font-medium">Login</p>

        {/* Login inputs */}
        <form method="post" className="flex flex-col items-center gap-6 md:gap-8 mb-4">
          <div className="w-full flex items-center justify-between">
            <label htmlFor="login-username" className="w-1/2 font-medium">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="login-username"
              placeholder="username"
              className="w-1/2 px-2 bg-transparent outline-none border-b border-gray-700 dark:placeholder:text-gray-700"
              required
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <label htmlFor="login-password" className="w-1/2 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="password"
              className="w-1/2 px-2 bg-transparent outline-none border-b border-gray-700 dark:placeholder:text-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="text-primary-600 font-semibold border border-primary-600 px-3 py-1 rounded-full hover:bg-primary-600 hover:text-white duration-100"
          >
            SUBMIT
          </button>
        </form>

        {/* link for signup page */}
        <div className="text-center text-sm">
          Don't have an account ? <Link to="/signup" className="font-medium text-blue-600">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
