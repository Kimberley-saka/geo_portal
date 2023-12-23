import Login from "../components/auth/Login";
import SignUp from "../components/auth/SignUp";


import React, { useState } from 'react';

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);

  const switchLoginSignUp = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col justify-center my-14 md:w-1/3
       border-gray-300 border rounded-2xl shadow-xl ">
        <div className="flex px-10 space-x-28 text-gray-500 text-lg pt-6">
          <div 
            className={`flex justify-center  border-b-2 ${isLogin ? 'border-sky-500 text-sky-500' : 'border-gray-500'} 
            w-28 hover:border-sky-500 hover:text-sky-500 transition-colors duration-200 cursor-pointer`} 
            onClick={switchLoginSignUp}
          >
            Login
          </div>

          <div 
            className={`flex justify-center border-b-2 ${!isLogin ? 'border-sky-500 text-sky-500' : 'border-gray-500'} 
            w-28 hover:border-sky-500 hover:text-sky-500 transition-colors duration-200 cursor-pointer`} 
            onClick={switchLoginSignUp}
          >
            Sign Up
          </div>
        </div>

        {isLogin ? (
          <div className="flex h-full justify-center md:h-96">
            <Login/>
          </div>
        ) : (
          <div className="flex md:h-96">
            <SignUp />
          </div>
        )}


      </div>
      
    </div>
  );
}

export default Authentication;