import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Tab, Tabs } from "../components/Tabs";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import account from "../assets/cart.svg";

import { userLogin, vendorLogin } from "../redux/slice/auth.slice";
import { toast } from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [vendorEmail, setVendorEmail] = useState("");
  const [vendorPassword, setVendorPassword] = useState("");
  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await dispatch(
        userLogin({
          email: userEmail,
          password: userPassword,
        })
      ).unwrap();
      toast.success(response.message);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleVendorLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await dispatch(
        vendorLogin({
          email: vendorEmail,
          password: vendorPassword,
        })
      ).unwrap();
      toast.success(response.message);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-rose-500 h-auto md:h-screen p-4">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Tabs>
        <Tab label="Login As User">
          <div className="mt-5 rounded-xl bg-gray-950/60 md:px-7 lg:px-10 grid grid-cols-1 md:grid-cols-2 p-5 md:p-7 lg:p-10">
            <div>
              <form onSubmit={handleUserLogin}>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value={loading ? "Logging in..." : "Login"}
                    className="hover:cursor-pointer w-full mb-3 border-0 rounded p-3 bg-rose-500 text-white"
                    disabled={loading}
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-white">
                  <Link to="/auth/recovery">Forgot password?</Link>
                  <p>
                    Not yet registered?{" "}
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
                    className="mt-5 flex justify-center gap-3 hover:cursor-pointer w-full mb-4 border-2 border-white rounded p-3 text-white"
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
          <div className="mt-5 rounded-xl bg-gray-950/60 px-5 md:px-7 lg:px-10 grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 lg:p-16">
            <div className="hidden md:block">
              <img src={account} alt="Account" className="w-full h-80" />
            </div>
            <div>
              <div className="text-white mb-5 text-center">
                <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
                <p>Fill in your details to log into your account</p>
              </div>
              <form onSubmit={handleVendorLogin}>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={vendorEmail}
                    onChange={(e) => setVendorEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={vendorPassword}
                    onChange={(e) => setVendorPassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value={loading ? "Logging in..." : "Login"}
                    className="hover:cursor-pointer w-full mb-3 border-0 rounded p-3 bg-rose-500 text-white"
                    disabled={loading}
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-white">
                  <Link to="/auth/recovery">Forgot password?</Link>
                  <p>
                    Not yet registered?{" "}
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
};

export default Login;
