import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";

function Layout() {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
}

export default Layout;
