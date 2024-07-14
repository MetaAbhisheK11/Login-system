import React from "react";
import OtpInput from "../components/OTPInput";

const Phone = () => {
  return (
    <>
      <label for="phone">Phone Number</label>
      <input
        type="number"
        id="phone"
        name="phone"
        className="mb-4 w-full h-10 rounded-md mt-2 px-2"
        placeholder="9538328910"
        required
      />
      <label for="otp">Enter OTP</label>
      <OtpInput />

      <button className="my-8 login-button" type="submit">
        Login
      </button>
    </>
  );
};

export default Phone;
