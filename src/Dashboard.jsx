import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidMessageDots } from "react-icons/bi";
import { TbCloudUpload } from "react-icons/tb";

const Dashboard = () => {
  return (
    <section className="flex">
      <div className="h-[955px] w-[186px] bg-sky-600 m-[32px] rounded-[20px]">
        <div>
          <div className="group h-[100px] w-[100px] bg-white mx-auto rounded-[50%] mt-[20px] overflow-hidden relative ">
            <img className="my-auto" src="profile.png" alt="" />

            <div className="hidden group-hover:flex w-full h-full bg-[rgba(0,0,0,.5)] absolute top-0 left-0  justify-center items-center">
              <TbCloudUpload className="text-white text-2xl" />
            </div>
          </div>
          <p className="text-center mt-[5px]">Labib</p>
        </div>
        {/* ------------------------------- */}
        <div className="w-100%">
          <div className=" mt-[40px] ">
            <div className="w-141px h-[88px] bg-red-500 rounded-l-[20px] ml-auto  hover:text-black   hover:bg-gray-300 
                 hover:font-bold rounded rounded-lg"></div>
            <FaHome className="text-[60px] mx-auto " />
          </div>

          <div className=" text-white   border-gray-300 hover:text-sky-600   hover:bg-white  hover:font-bold  rounded-lg mt-[40px] ">
            <BiSolidMessageDots className="text-[60px] mx-auto " />
          </div>
          <div className=" text-white   border-gray-300 hover:text-black   hover:bg-gray-300 
                 hover:font-bold rounded rounded-lg  hover:font-bold  rounded-lg mt-[40px] mx-auto">
            <FaHome className="text-[60px] mx-auto " />
          </div>
          <TbCloudUpload />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
