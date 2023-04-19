import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="navbar flex justify-center gap-[20px]">
        <div>

        <Link to={"/"}>
          <h1 className="text-[20px]">Home</h1>
        </Link>
        </div>
        <div>

        <Link to={"/about"}>
          <h1 className="text-[20px]">About</h1>
        </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
