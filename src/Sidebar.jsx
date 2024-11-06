import React from "react";
import ProfileImage from "../public/profile.png";
import { TbCloudUpload } from "react-icons/tb";
import { FaHome } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  let location = useLocation();
  return (
    <section>
      <>
        {/* component */}
        <div>
          <nav className="flex flex-col bg-sky-600 w-64 h-screen px-[30px] m-[30px] tex-gray-900 rounded-[20px]  border-black shadow-2xl">
            {/* Profile image.............. */}
            <div>
              <div className="w-[full] h-[40px]"></div>
              <div className="group h-[100px] w-[100px] bg-white mx-auto rounded-[50%] mt-[20px] overflow-hidden relative">
                <img className="" src={ProfileImage} alt="" />

                <div className="hidden group-hover:flex w-full h-full bg-[rgba(0,0,0,.5)] absolute top-0 left-0  justify-center items-center">
                  <TbCloudUpload className="text-white text-2xl" />
                </div>
              </div>
              <p className="text-center mt-[5px]">Labib</p>
              <div className="w-[full] h-[40px]"></div>
            </div>
            {/* ----------------------------------------------- */}
            <div className="mt-10 mb-4">
              <ul className="ml-4 gap-8">
                <li className=" text-gray-100 flex   flex-row  ">
                  <div
                    className={`flex hover:text-black   hover:bg-gray-300 hover:font-bold  border-gray-300   w-full rounded-lg mb-2 px-4 py-4 
                    ${
                      location.pathname == "/" &&
                      "text-black bg-gray-300 font-bold  "
                    }`}
                  >
                    <Link to={"/"}>
                      {" "}
                      <div className="flex">
                        <FaHome className="text-[25px] " />
                        <h2 className="ml-3 ">Home</h2>
                      </div>
                    </Link>
                  </div>
                </li>
                {/* ------------------------------------------------ */}
                <li className=" text-gray-100 flex   flex-row  ">
                  <div
                    className={`flex hover:text-black   hover:bg-gray-300 hover:font-bold  border-gray-300   w-full rounded-lg mb-2 px-4 py-4 
                    ${
                      location.pathname == "/message" &&
                      "text-black bg-gray-300 font-bold  "
                    }`}
                  >
                    <Link to={"/message"}>
                      {" "}
                      <div className="flex">
                        <BiMessageRoundedDetail className="text-[25px] " />
                        <h2 className="ml-3 ">Messages</h2>
                      </div>
                    </Link>
                  </div>
                </li>

                {/* ------------------------------------------------ */}

                <li className=" text-gray-100 flex   flex-row  ">
                  <div
                    className={`flex hover:text-black   hover:bg-gray-300 hover:font-bold  border-gray-300   w-full rounded-lg mb-2 px-4 py-4 
                    ${
                      location.pathname == "/notifications" &&
                      "text-black bg-gray-300 font-bold  "
                    }`}
                  >
                    <Link to={"/notifications"}>
                      {" "}
                      <div className="flex">
                        <MdOutlineNotificationsActive className="text-[25px] " />
                        <h2 className="ml-3 ">Notifications</h2>
                      </div>
                    </Link>
                  </div>
                </li>




            
                {/* ------------------------------------------------ */}
                <li className=" text-gray-100 flex   flex-row  ">
                  <div
                    className={`flex hover:text-black   hover:bg-gray-300 hover:font-bold  border-gray-300   w-full rounded-lg mb-2 px-4 py-4 
                    ${
                      location.pathname == "/profile" &&
                      "text-black bg-gray-300 font-bold  "
                    }`}
                  >
                    <Link to={"/profile"}>
                      {" "}
                      <div className="flex">
                        <ImProfile className="text-[25px] " />
                        <h2 className="ml-3 ">profile</h2>
                      </div>
                    </Link>
                  </div>
                </li>







   
                {/* ------------------------------------------------ */}
                <li className=" text-gray-100 flex   flex-row  ">
                  <div
                    className={`flex hover:text-black   hover:bg-gray-300 hover:font-bold  border-gray-300   w-full rounded-lg mb-2 px-4 py-4 
                    ${
                      location.pathname == "/settings" &&
                      "text-black bg-gray-300 font-bold border-black  "
                    }`}
                  >
                    <Link to={"/settings"}>
                      {" "}
                      <div className="flex">
                        <IoSettingsSharp className="text-[25px] " />
                        <h2 className="ml-3 ">Settings</h2>
                      </div>
                    </Link>
                  </div>
                </li>










                {/* ------------------------------------------------ */}
       


                <li
                  className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300 
                 hover:font-bold  rounded-lg"
                >
                  <MdLogout className="text-[25px] " />
                  <h2 className="ml-3 ">Log out</h2>
                </li>
                {/* ------------------------------------------------ */}
              </ul>
            </div>
          </nav>
        </div>
      </>
    </section>
  );
};

export default Sidebar;
