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
import Dashboard from "./Dashboard";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Message from "./Message";
import Rootlayout from "./layout/Rootlayout";
import Settings from "./Settings";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
      <Route path="/" element={<Rootlayout />}>
        <Route path="index" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/message" element={<Message />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
