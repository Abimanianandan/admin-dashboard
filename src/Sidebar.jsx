import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div
        className="d-flex flex-column  flex-shrink-0 p-3 text-bg-info vh-100 position-fixed "
        style={{width: "280px"}}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-danger text-decoration-none "
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlink:href="#bootstrap"></use>
          </svg>
          <span className="fs-4"><i class="fa-brands fa-app-store"></i>Admin </span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link text-dark fs-4" >
            <i class="fa-brands fa-squarespace" style={{color:" #f50000"}}></i>
                     Dashboard
            </Link>
          </li>
          <li>
            <Link to={"adduser"} className="nav-link text-dark fs-4">
            <i class="fa-brands fa-odnoklassniki" style={{color: "#f90b2f"}}></i>
                Add User
            </Link>
          </li>
         
        
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
