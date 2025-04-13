// src/pages/Signup.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup, vendorSignup } from "../redux/slice/auth.slice";
import { Tab, Tabs } from "../components/Tabs";
import { Link, useNavigate } from "react-router-dom";
import account from "../assets/account.svg";
import { toast } from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
const [loading, setLoading] = useState(false);

  // States for "Signup As User"
  const [username, setUsername] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // States for "Signup As Vendor"
  const [storeName, setStoreName] = useState("");
  const [storeLocation, setStoreLocation] = useState("");
  const [storeImage, setStoreImage] = useState(null);
  const [storePhoneNumber, setStorePhoneNumber] = useState("");
  const [storeEmailAddress, setStoreEmailAddress] = useState("");
  const [storePassword, setStorePassword] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const navigate = useNavigate();
   const handleUserSignup = async (e) => {
     e.preventDefault();
     setLoading(true);
     const userData = {
       username,
       phone: userPhone,
       email: userEmail,
       password: userPassword,
     };
     try {
       // Await the async thunk and unwrap its result
       const response = await dispatch(userSignup(userData)).unwrap();
       // Backend message is used here
       toast.success(response.message);
       navigate('/auth/otp-verification')
       // Optionally clear the form fields or redirect.
     } catch (error) {
       // Display error message from backend
       toast.error(error);
     } finally {
       setLoading(false);
     }
   };

   const handleVendorSignup = async (e) => {
     e.preventDefault();
     setLoading(true);
     // Prepare FormData for file upload and text fields.
     const formData = new FormData();
     formData.append("storeName", storeName);
     formData.append("storeLocation", storeLocation);
     if (storeImage) {
       // Ensure the field name ("storeImage") is what the backend expects.
       formData.append("storeImage", storeImage);
     }
     formData.append("storePhoneNumber", storePhoneNumber);
     formData.append("storeEmailAddress", storeEmailAddress);
     formData.append("storePassword", storePassword);
     formData.append("storeDescription", storeDescription);

     try {
       const response = await dispatch(vendorSignup(formData)).unwrap();
       toast.success(response.message);

      navigate("/auth/vendor-otp-verification");
     } catch (error) {
       toast.error(error);
     } finally {
       setLoading(false);
     }
   };

  return (
    <div className="bg-rose-500 min-h-screen p-4">
      <Tabs>
        <Tab label="Signup As User">
          <div className="mt-5 rounded-xl bg-gray-950/60 px-5 md:px-7 lg:px-10 grid grid-cols-1 md:grid-cols-2 p-5 md:p-7 lg:p-10">
            <div>
              <form onSubmit={handleUserSignup}>
                <div>
                  <label htmlFor="username" className="text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                  <div>
                    <input
                      type="submit"
                      value={loading ? "Signing up..." : "Signup"}
                      className="hover:cursor-pointer w-full mb-4 border-0 p-3 bg-rose-500 rounded-lg text-white"
                      disabled={loading}
                    />
                  </div>
                  <div className="text-center lg:text-end text-white">
                    <p>
                      Already registered?{" "}
                      <Link to="/auth/login" className="ml-1 underline">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden md:flex justify-center items-center">
              <img src={account} alt="Account" className="w-full h-96" />
            </div>
          </div>
        </Tab>
        <Tab label="Signup As Vendor">
          <div className="mt-5 rounded-xl bg-gray-950/60 px-5 md:px-7 lg:px-10 p-5 md:p-7 lg:p-16 w-full flex justify-center items-center">
            <form onSubmit={handleVendorSignup} className="grid grid-cols-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="storeName" className="text-white">
                    Store Name
                  </label>
                  <input
                    type="text"
                    placeholder="Store/business name"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    
                  />
                </div>
                <div>
                  <label htmlFor="storeLocation" className="text-white">
                    Store Location
                  </label>
                  <input
                    type="text"
                    placeholder="Store location"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={storeLocation}
                    onChange={(e) => setStoreLocation(e.target.value)}
                    
                  />
                </div>
                <div>
                  <label htmlFor="storeImage" className="text-white">
                    Store Image
                  </label>
                  {/* IMPORTANT: Add a "name" attribute here */}
                  <input
                    type="file"
                    name="storeImage"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    onChange={(e) =>
                      setStoreImage(e.target.files && e.target.files[0])
                    }
                    
                  />
                </div>
                <div>
                  <label htmlFor="storePhone\mi,nrt" className="text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={storePhoneNumber}
                    onChange={(e) => setStorePhoneNumber(e.target.value)}
                    
                  />
                </div>
                <div>
                  <label htmlFor="storeEmailAddress" className="text-white">
                    Store Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={storeEmailAddress}
                    onChange={(e) => setStoreEmailAddress(e.target.value)}
                    
                  />
                </div>
                <div>
                  <label htmlFor="storePassword" className="text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 rounded p-3 bg-white border-0"
                    value={storePassword}
                    onChange={(e) => setStorePassword(e.target.value)}
                    
                  />
                </div>
              </div>
              <div>
                <label htmlFor="storeDescription" className="text-white">
                  Store Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Store description"
                  className="w-full mb-4 rounded p-3 bg-white border-0"
                  value={storeDescription}
                  onChange={(e) => setStoreDescription(e.target.value)}
                  
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                <div>
                  <input
                    type="submit"
                    value={loading ? "Registering..." : "Register Store"}
                    className="hover:cursor-pointer w-full mb-4 border-0 p-3 bg-rose-500 rounded-lg text-white"
                    disabled={loading}
                  />
                </div>
                <div className="text-center lg:text-end text-white">
                  <p>
                    Store already registered?{" "}
                    <Link to="/auth/login" className="ml-1 underline">
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
