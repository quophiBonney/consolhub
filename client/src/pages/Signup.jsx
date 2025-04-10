import React from "react";
import { Tab, Tabs } from "../components/Tabs";
import account from "../assets/account.svg";
const Signup = () => {
  return (
    <div className="">
      <Tabs>
        <Tab label="Login As A User " className="">
          <div className="mt-5 rounded-xl bg-gray-950/60 px-5 md:px-7 lg:px-10 grid grid-cols-1 md:grid-cols-2 p-5 md:p-7 lg:p-10">
            <div>
              <div className="mb-5 text-center text-white ">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Welcome Back 👋
                </h3>
                <p>Fill in your credentials to log into your account</p>
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
                    className="hover:cursor-pointer w-full mb-4 border-0 radio p-3 bg-rose-500 rounded-lg text-white"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="hidden md:block">
              <img src={account} alt="Account" className="w-full h-72" />
            </div>
          </div>
        </Tab>
        <Tab label="Login As A Vendor">
          <div className="mt-5 rounded-xl bg-gray-950/60 px-5 md:px-7 lg:px-10 grid grid-cols-1 md:grid-cols-2 p-5 md:p-7 lg:p-10">
            <div className="hidden md:block">
              <img src={account} alt="Account" className="w-full h-72" />
            </div>
            <div>
              <div className="mb-5 text-center text-white ">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Welcome Back Vendor👋
                </h3>
                <p>Fill in your credentials to log into your account</p>
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
                    className="hover:cursor-pointer w-full mb-4 border-0 radio p-3 bg-rose-500 rounded-lg text-white"
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Signup;
