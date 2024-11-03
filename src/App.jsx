import React from "react";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import Login2 from "./Login2";
import Dashboard from "./Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login2" element={< Login2 />}></Route>
      <Route path="/dash" element={<Dashboard />}></Route>


    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
