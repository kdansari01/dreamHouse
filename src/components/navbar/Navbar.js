import "./navbar.css";
import logo from "../../assests/images/favicon.svg";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import Home from "../../pages/home/Home";
export const Navbar = () => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [isActive, setIsActive] = useState(1);
  // const [state, setState] = useState(1);

  // const togleButton = (index) => {
  //   setIsActive(index);
  // };
  // console.log(isActive);
  // const toggleBtn = (index) => {
  //   setIsActive(index);
  // };

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
              <ul className="nav  navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item navTitle">
                  <Link
                    to="/"
                    className="nav-link active"
                    // className={isActive === 1 ? "nav-link active" : "nav-link"}
                    // onClick={() => togleButton(1)}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    // className={isActive === 2 ? "nav-link active" : "nav-link"}
                    // onClick={() => togleButton(2)}
                    to="/service"
                    // href="#service"
                  >
                    Service
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    // className={!isActive ? "atctiveHome nav-link" : "nav-link"}
                    // onClick={() => setIsActive(true)}
                    // className={isActive === 3 ? "nav-link active" : "nav-link"}
                    // onClick={() => togleButton(3)}
                    to="/find-Home"
                  >
                    Find Home
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <Link
                    className="nav-link active"
                    //  className="nav-link "
                    // className={isActive === 4 ? "nav-link active" : "nav-link"}
                    // onClick={() => togleButton(4)}
                    // href="#"
                    // to="/wishlist"
                  >
                    Wishlist
                  </Link>
                  <div
                    className="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasRightLabel">
                        Wishlist
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">...</div>
                  </div>
                </li>

                <li className="nav-item">
                  <Link
                     className="nav-link active"
                    // className={isActive === 5 ? "nav-link active" : "nav-link"}
                    // onClick={() => togleButton(5)}
                    //  href="/"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </main>
          </div>
        </nav>
      </div>
    </>
  );
};
