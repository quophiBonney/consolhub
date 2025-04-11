import React from "react";
import { Tab, Tabs } from "../components/Tabs";
import account from "../assets/account.svg";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="h-full">
      <Tabs>
        <Tab label="Signup As User " className="">
          <div className="mt-5 rounded-xl bg-gray-950/60 px-5 md:px-7 lg:px-10 grid grid-cols-1 md:grid-cols-2 p-5 md:p-7 lg:p-10">
            <div>
              <form>
                <div>
                  <label htmlFor="username" className="text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                  <div>
                    <input
                      type="submit"
                      value="Signup"
                      className="hover:cursor-pointer w-full mb-4 border-0 radio p-3 bg-rose-500 rounded-lg text-white"
                      required
                    />
                  </div>
                  <div className="text-center lg:text-end text-white">
                    <p>
                      Already registered?{" "}
                      <Link to="/auth/login" className="ml-1">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden md:block">
              <img src={account} alt="Account" className="w-full h-96" />
            </div>
          </div>
        </Tab>
        <Tab label="Signup As Vendor">
          <div className="mt-5 rounded-xl bg-gray-950/60 px-5 md:px-7 lg:px-10 p-5 md:p-7 lg:p-16 w-full flex justify-center items-center">
            <form className="grid grid-cols-1 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="name" className="text-white">
                    Store Name
                  </label>
                  <input
                    type="text"
                    placeholder="Store/business name"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="location" className="text-white">
                    Store Location
                  </label>
                  <input
                    type="text"
                    placeholder="Store location"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="business logo" className="text-white">
                    Store Logo
                  </label>
                  <input
                    type="file"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full mb-4 rounded radio bg-white p-3 border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white">
                    Store Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 rounded radio p-3 bg-white border-0"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="text-white">
                  Store Description
                </label>
                <textarea
                  rows="4"
                  cols="4"
                  type="text"
                  placeholder="Store description"
                  className="w-full mb-4 rounded radio p-3 bg-white border-0"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                <div>
                  <input
                    type="submit"
                    value="Register Store"
                    className="hover:cursor-pointer w-full mb-4 border-0 radio p-3 bg-rose-500 rounded-lg text-white"
                    required
                  />
                </div>
                <div className="text-center lg:text-end text-white">
                  <p>
                    Store already registered?{" "}
                    <Link to="/auth/login" className="ml-1">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Signup;
