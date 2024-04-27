import { Input } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from "../../assets/loginImage.png";
import logo from "../../assets/logo.png";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        navigate("/")
    }
    return (
        <div className="h-screen">
        <div className="bg-gray-100 flex  h-screen">
          {/* <!-- Left: Image --> */}
          <div className="w-1/2 h-screen hidden lg:block relative">
            <img
              src="https://i.ibb.co/n3yZDdC/image.png"
              alt="Placeholder Image"
              className="object-cover w-full h-full"
            />
            <div className='absolute bottom-14 p-10 flex flex-col justify-center'>
            <span className='text-white  text-6xl text-center font-bold mx-auto'>Welcome</span>
            <span className='text-center text-white text-2xl  mt-2'>You are entering a unique place, where you can explore fashion</span>
            </div>
          </div>
          {/* <!-- Right: Login Form --> */}
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <div className='flex justify-center'>
                <img src={logo} alt="" />
            </div>
           
            
            <div className='mt-[80px]'>
            <h1 className="flex text-[#1E66CA] text-[44px] font-semibold">
              Login
            </h1>
            <p>To continue to the app, please enter login information</p>
            {/* <h1 className="text-2xl font-semibold mb-4">Sign In</h1> */}
            <form>
              {/* <!-- Email Input --> */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="on"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <!-- Password Input --> */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                < Input.Password  onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                {/* <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                /> */}
              </div>
  
              {/* <!-- Forgot Password Link --> */}
              <div className="mb-6 font-medium font-['Montserrat'] text-primary">
                {/* <p
                  onClick={(e) => navigate("/forget-password")}
                  className=" cursor-pointer"
                >
                  Forgot Password?
                </p> */}
              </div>
              {/* <!-- Login Button --> */}
              <div
                onClick={handleLogin}
                className="bg-[#1E66CA] cursor-pointer text-white font-semibold rounded-md flex justify-center mx-auto px-[100px] py-3"
              >
                Login
              </div>
            </form>
            </div>
            
          </div>
        </div>
      </div>
    );
}

export default Login;
