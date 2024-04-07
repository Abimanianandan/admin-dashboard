import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Admin = () => {
  return (
    <div className="d-flex ">
        <div className="col-lg-3">
        <Sidebar/>
        </div>
        
        <Outlet/>
    </div>
  
  );
};

export default Admin;
