import React from 'react'
import { Tab, Tabs } from '../components/Tabs'
import account from '../assets/cart.svg'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="">
      <Tabs>
        <Tab label="Login As User " className="">
          <div className="mt-5 rounded-xl bg-gray-950/60 md:px-7 lg:px-10 grid grid-cols-1 md:grid-cols-2 p-5 md:p-7 lg:p-10">
            <div>
              <form>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Login"
                    className="hover:cursor-pointer w-full mb-3 border-0 radio p-3 bg-rose-500 rounded-lg text-white"
                    required
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between text-white items-center">
                  <Link to="/auth/recovery">Forgot password?</Link>
                  <p>
                    Not yet registered?
                    <Link
                      to="/auth/signup"
                      className="text-gray-400 hover:text-white ml-1"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
                <div className="w-full">
                  <h4 className="text-center text-white">Or</h4>
                  <Link
                    to=""
                    className="mt-5 flex justify-center gap-3 hover:cursor-pointer w-full mb-4 border-2 border-white radio p-3 rounded-lg text-white"
                  >
                    <FcGoogle size={25} /> Login With Google
                  </Link>
                </div>
              </form>
            </div>
            <div className="hidden md:block">
              <img src={account} alt="Account" className="w-full h-72" />
            </div>
          </div>
        </Tab>
        <Tab label="Login As Vendor">
          <div className="mt-5 rounded-xl bg-gray-950/60 px-5 md:px-7 lg:px-10 md:gap-16 grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 lg:p-16">
            <div className="hidden md:block">
              <img src={account} alt="Account" className="w-full h-80" />
            </div>
            <div>
              <div className="text-white mb-5 text-center">
                <h1 className="text-2xl  font-bold">Welcome Back 👋</h1>
                <p>Fill in your details to log into your account</p>
              </div>
              <form>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Login"
                    className="hover:cursor-pointer w-full mb-3 border-0 radio p-3 bg-rose-500 rounded-lg text-white"
                    required
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between text-white items-center">
                  <Link to="/auth/recovery">Forgot password?</Link>
                  <p>
                    Not yet registered yet?
                    <Link
                      to="/auth/signup"
                      className="text-gray-400 hover:text-white ml-1"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Login