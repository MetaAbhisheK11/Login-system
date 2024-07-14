import React from "react";
import OtpInput from "../components/OTPInput";

const Email = () => {
  return (
    <>
      <label for="phone">Email</label>
      <input
        type="email"
        id="phone"
        name="phone"
        className="mb-4 w-full h-10 rounded-md mt-2 px-2"
        placeholder="abhishek@example.com"
        required
      />
      <label for="phone">Pasword</label>
      <input
        type="password"
        id="phone"
        name="phone"
        className="mb-4 w-full h-10 rounded-md mt-2 px-2"
        placeholder="********"
        required
      />

      <button className="my-8 login-button" type="submit">
        Login
      </button>
    </>
  );
};

export default Email;
