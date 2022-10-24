import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import RootCSS from "./index.module.scss";

export default function Root(params) {
  return (
    <div className={RootCSS._r_a}>
      <Header />
      <div className={RootCSS._r_b}>
        <div className={RootCSS._r_c}>
          <Outlet />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
