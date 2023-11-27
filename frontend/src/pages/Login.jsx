import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="h-7/10 w-7/10 flex">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-5xl font-bold text-primary-500">Sharewave</h3>
          <span className="text-2xl">
            Connect with your friends and the world around you on Sharewave
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="h-full p-5 border bg-white rounded-2xl flex flex-col items-center justify-center gap-8">
            <input
              type="email"
              placeholder="Enter your email id"
              className="w-full h-12 rounded-xl border border-gray-300 text-lg px-5 py-2 outline-none"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-12 rounded-xl border border-gray-300 text-lg px-5 py-2 outline-none"
            />
            <button className="w-full px-5 py-2 text-xl font-medium border-2 text-primary-500 border-primary-500 rounded-xl hover:bg-primary-500 hover:text-white">
              Login
            </button>
            <span className="text-primary-500 cursor-pointer">Forgot Password</span>
            <button className="px-5 py-2 text-base font-medium border-2 text-secondary-500 border-secondary-500 rounded-xl hover:bg-secondary-500 hover:text-white">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
