import React from "react";
import "./Common.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen login_background  flex">
      <div className="w-[60%] h-full  ">
        <div className="ml-[150px] mt-[190px]">
          <img
            className="rounded-[20px] border-[10px] animate-bounce shadow-2xl "
            src="banner2.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="ml-[180px] mt-10">
        <div>
          <div className="  py-6 flex flex-col  sm:py-12 ">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>

              <div className="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
                <form>
                  <div className="space-y-6">
                    <div>
                      <p className="mb-10 text-2xl tracking-wider font-semibold ">
                        Sign in to your account
                      </p>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Email ID
                      </label>
                      <input
                        name="email"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                        placeholder="Enter email"
                      />
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                        placeholder="Enter password"
                      />
                      <div className="flex justify-end mt-[10px]"></div>
                    </div>
                  </div>

                  {/* LOGIN BUTTON */}
                  <div className="!mt-[20px]">
                    <button
                      type="button"
                      className=" registration_btn w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 focus:outline-none  focus:ring-blue-600 focus:ring-offset-red-200 transition ease-in duration-200 text-center  shadow-md  focus:ring-2 focus:ring-offset-2 "
                    >
                      LOGIN
                    </button>
                  </div>

                  <button
                    type="button"
                    className="py-3 px-4 flex justify-center items-center mt-[10px] bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    <svg
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="mr-2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                    </svg>
                    Sign in with Google
                  </button>

                  <p className="text-gray-800 text-sm mt-6 text-center">
                    Don't have an account?{" "}
                    <Link
                      to="/registration"
                      className="  text-blue-600 font-semibold hover:underline ml-1"
                    >
                      Register Here
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div className="title_bar_loginpage ml-[10px] text-center ">
            <h1>ChatZilla</h1>
            <h2>Where Messages Come Alive</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
