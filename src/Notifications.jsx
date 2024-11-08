import React from "react";

const Notifications = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video bg-cover w-full h-screen">
        <source src="../public/video/background.mp4" type="video/mp4" />
        <div className=" ml-[30px] text-center ">
            <h1 className="mt-[5px] text-[100px] font-bold text-sky-500 underline  ">
              Chatzilla
            </h1>
            <h2 className="text-[20px] mt-[-25px] font-medium ">
              Where Messages Come Alive
            </h2>
          </div>
      </video>
     
    </div>
  );
};

export default Notifications;
