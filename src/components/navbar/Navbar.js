import "./navbar.css";
import logo from "../../assests/images/favicon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Home from "../../pages/home/Home";
export const Navbar = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>

      <div className="sideBar ">
      {/* <div> */}
        {/* <nav className={`navbar ${sidebarOpen ? "open" : ""}`}> */}
        <nav className="">
          {/* <button
            className="toggle-sidebar"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button> */}

          <div className="logoSec d-flex align-items-center justify-content-center ">
            <img src={logo} alt="logo" className="w-25" />
            <h1 className="logoText">Dream Home</h1>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <main>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item navTitle">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#service">
                    Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/find-Home">
                    Find Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Wishlist
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    News
                  </a>
                </li>
              </ul>
            </main>
          </div>
        </nav>
      </div>

    </>
  );
};
