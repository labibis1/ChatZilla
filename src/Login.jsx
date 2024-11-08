import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import "./Login.css";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

const Login = () => {
  // States.........................
  const auth = getAuth();
  const db = getDatabase();

  let navigate = useNavigate("");
  const provider = new GoogleAuthProvider();
  // const db = getDatabase();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let [loginErr, setLoginErr] = useState("");
  let [loginSuccess, setLoginSuccess] = useState();

  // Function......
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let handleLogin = () => {
    if (!email) {
      setEmailErr("Email required");
      setEmailErr("");
    }

    if (!password) {
      setPasswordErr("Password required");
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Invalid email");
    }
    if (email && password) {
      //firebase code copy paste
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //login success popup
          
        }).then(()=>{
          setLoginSuccess("Login Success!");

          navigate("/");
        })

        .catch((error) => {
          const errorCode = error.code;
          {
            errorCode && setLoginErr("Invalid credential");
          }
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  //login with google..............................................
  let handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        set(ref(db, "users/" + result.user.uid), {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        }).then (()=>{
          navigate("/");
        })



      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.code);
        // ...
      });
  };

  return (
    <div className="w-full h-screen   flex  login-page">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="../public/video/background.mp4" type="video/mp4" />
      </video>

      <div className="w-[60%] h-full  ">
        <div className="ml-[300px] mt-[250px] flex ">
          <div className=" h-[200px] w-[200px] bg-sky-600 rounded-full animate-bounce items-center flex ">
            <div className="h-[50px] w-[50px] bg-white m-auto pt-100px animate-spin  "></div>
          </div>
          <div className=" h-[200px] w-[200px] bg-red-600 rounded-full animate-custom-bounce ml-[30px] items-center flex">
            <div className="h-[50px] w-[50px] bg-white m-auto pt-100px animate-spin  "></div>
            {/* <IoMdStar  className="text-[150px] text-white m-auto animate-spin"  /> */}
          </div>
          <div className=" h-[200px] w-[200px] bg-yellow-400 rounded-full animate-bounce ml-[30px] items-center flex">
            <div className="h-[50px] w-[50px] bg-white m-auto pt-100px animate-spin  "></div>
          </div>
        </div>

        <div className="ml-[90px] mt-[px]  ">
          <div className=" ml-[30px] text-center ">
            <h1 className="mt-[5px] text-[100px] font-bold text-white underline   ">
              Chatzilla
            </h1>
            <h2 className="text-[22px] mt-[-25px] font-medium text-white">
              Where Messages Come Alive
            </h2>
          </div>
        </div>
      </div>

      {/* // Login Part.............. */}
      <div className="ml-[180px] mt-[120px]">
        <div>
          <div className="  py-6 flex flex-col  sm:py-12 ">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500  shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>
              <div className="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
                <form>
                  <div className="space-y-6">
                    <div>
                      <p className="mb-[20px] text-xl tracking-wider font-semibold font-sans text-gray-600 text-[20px]">
                        Sign in to ChatZilla
                      </p>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Email ID
                      </label>
                      <input
                        onChange={handleEmail}
                        name="email"
                        type="text"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                        placeholder="Enter email"
                      />
                      {emailErr && <p className="text-red-500">{emailErr}</p>}
                    </div>
                    <div>
                      <label className="text-gray-800 text-sm mb-2 block">
                        Password
                      </label>
                      <input
                        onChange={handlePassword}
                        name="password"
                        type="password"
                        className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                        placeholder="Enter password"
                      />
                      {passwordErr && (
                        <p className="text-red-500">{passwordErr}</p>
                      )}

                      {loginErr && (
                        <p className="text-red-600 mt-[5px] ">{loginErr}</p>
                      )}

                      {loginSuccess && (
                        <p className="text-green-600 mt-[5px] font-semibold ">
                          {loginSuccess}
                        </p>
                      )}

                      <div className="flex justify-end mt-[10px]"></div>
                    </div>
                  </div>

                  {/* LOGIN BUTTON */}
                  <div className="!mt-[20px]">
                    <button
                      onClick={handleLogin}
                      type="button"
                      className=" registration_btn w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 focus:outline-none  focus:ring-blue-600 focus:ring-offset-red-200 transition ease-in duration-200 text-center  shadow-md  focus:ring-2 focus:ring-offset-2 "
                    >
                      LOGIN
                    </button>
                  </div>
                  {/* Google login button */}
                  <button
                    onClick={handleGoogleLogin}
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

          {/* <div className=" ml-[55px] text-center ">
            <h1 className="mt-[5px] text-[70px] font-bold text-sky-500 underline  ">
              Chatzilla
            </h1>
            <h2 className="text-[20px] mt-[-15px] font-medium ">
              Where Messages Come Alive
            </h2>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
