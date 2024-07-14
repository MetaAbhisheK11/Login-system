import { useState } from "react";
import "./App.css";
import logo from "./Task/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="login-box1">
          <img src={logo} />

          <form id="login-form">
            <input
              type="button"
              id="phone"
              value="Phone No"
              onClick="redirectToPhone()"
            />
            <input
              type="button"
              id="email"
              value="Email"
              onClick="redirectToEmail()"
            />
            <br />
            <label htmlFor="otp">Phone No</label>
            <div className="Phn-no">
              <input
                type="text"
                id="phnno"
                name="phnno"
                maxLength="1"
                required
              />
            </div>
            <button type="submit">Next</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
