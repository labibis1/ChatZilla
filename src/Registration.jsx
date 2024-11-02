import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Registration = () => {
  //........................States......................

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [nameErr, setNameErr] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");

  let [passwordShow, setPasswordShow] = useState(false);
  let [popupBox, setPopupBox] = useState();
  //........................Function......................
  let handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  //Button Function.........................
  let handleRegistration = () => {
    if (!name) {
      setNameErr("Name required");
    }
    if (!email) {
      setEmailErr("Email required");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Invalid email");
    }

    if (!password) {
      setPasswordErr("Password required");
    } 
    
    else if (email && name && password) {
      setEmail("");
      setName("");
      setPassword("");
      setPopupBox("REGISTRATION SUCCESSFULL");
    }
  };

  return (
    <div className="flex  boss_div w-full h-screen bg-red-700">
      <div className="div1 w-[35%] bg-white justify-center items-center my-auto shadow-2xl">
        <img src="2.webp" alt="" />
      </div>

      <div className="div2 w-[30%]">
        <div className=" w-full h-screen">
          <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
            <div className="registration_form max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 shadow-2xl ">
              <div className="text-center mb-12">
                <a href="javascript:void(0)">
                  <img src="cz3.png" alt="" className="w-60 inline-block" />
                </a>
              </div>
              <form>
                <div className="space-y-6">
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">
                      Full Name{" "}
                    </label>
                    <input
                      onChange={handleName}
                      value={name}
                      type="text"
                      className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                      placeholder="Enter name "
                    />
                    {nameErr && (
                      <p className="text-red-500 text-sm">{nameErr}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">
                      Email ID
                    </label>
                    <input
                      onChange={handleEmail}
                      value={email}
                      name="email"
                      type="text"
                      className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                      placeholder="Enter email"
                    />
                    {emailErr && (
                      <p className="text-red-500 text-sm">{emailErr}</p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="text-gray-800 text-sm mb-2 block ">
                      Password
                    </label>
                    <input
                      onChange={handlePassword}
                      value={password}
                      name="password"
                      type={passwordShow ? "text" : "password"}
                      className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500 "
                      placeholder="Enter password"
                    />
                    {passwordShow ? (
                      <VisibilityIcon
                        onClick={() => setPasswordShow(!passwordShow)}
                        className="absolute top-10 right-5"
                      />
                    ) : (
                      <VisibilityOffIcon
                        onClick={() => setPasswordShow(!passwordShow)}
                        className="absolute top-10 right-5"
                      />
                    )}

                    {passwordErr && (
                      <p className="text-red-500 text-sm">{passwordErr}</p>
                    )}
                  </div>

                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />

                    <label
                      htmlFor="remember-me"
                      className="text-gray-800 ml-3 block text-sm"
                    >
                      I accept the{" "}
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600 font-semibold hover:underline ml-1"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <div className="!mt-12">
                  <button
                    onClick={handleRegistration}
                    type="button"
                    className=" registration_btn w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 focus:outline-none"
                  >
                    Create an account
                  </button>
                </div>

                <p className="text-gray-800 text-sm mt-6 text-center">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="  text-blue-600 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="div3 w-[35%] bg-white justify-center items-center my-auto shadow-2xl">
        <img src="2.webp" alt="" />
      </div>

      {popupBox && (
        <div className="bg-blue-600 shadow-2xl w-[420px] h-[60px] absolute top-[60px] left-[740px] animate-bounce rounded-[50px] ">
          <h1 className="text-white text-[25px] font-semibold flex justify-center mt-[9px]   ">
            {popupBox}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Registration;
