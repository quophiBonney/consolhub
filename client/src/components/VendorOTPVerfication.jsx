import React from 'react'
import otp from '../assets/otp.svg'
const VendorOTPVerification = () => {
  return (
    <section className="bg-rose-500 h-screen w-full overflow-hidden flex flex-col justify-center items-center">
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center px-5 bg-gray-900/40 rounded-lg shadow-md p-5 md:p-7 lg:p-10">
        <div>
          <img src={otp} alt="" className="w-40 h-40 mb-5" />
        </div>
        <div className="w-full">
          <form>
            <div>
              <input
                type="number"
                placeholder="Enter OTP"
                className="w-full mb-4 rounded radio p-3 bg-white text-black  border-0 "
                required
              />
            </div>
            <div>
              <input
                type="submit"
                value="Verify OTP"
                className="w-full mb-4 rounded radio p-3 border-0 bg-rose-500 text-white shadow-md"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VendorOTPVerification