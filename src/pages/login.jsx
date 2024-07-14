import { useState } from "react";
import "../App.css";
import OtpInput from "../components/OTPInput";
import Phone from "./phone";
import Email from "./email";

function Login() {
  const [active, setActive] = useState("phone");
  console.log(active);
  return (
    <>
      <div class="login-box">
        <img src="logo.png" />

        <div className="flex gap-4 my-8">
          <button
            className={`w-1/2 py-2 rounded-md border border-gray-400 ${
              active === "phone" &&
              "!bg-brand !text-gray-600 !border-2 !border-gray-400"
            } hover:bg-black`}
            onClick={() => setActive("phone")}
          >
            Phone
          </button>
          <button
            className={`w-1/2 py-2 rounded-md border border-gray-400 ${
              active === "email" &&
              "!bg-brand !text-gray-600 !border-2 !border-gray-400"
            } hover:bg-black`}
            onClick={() => setActive("email")}
          >
            Email
          </button>
        </div>
        {active === "phone" ? <Phone /> : <Email />}
      </div>
    </>
  );
}

export default Login;
