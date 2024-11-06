import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        {" "}
        <Outlet />
      </div>
    </main>
  );
};

export default Rootlayout;
