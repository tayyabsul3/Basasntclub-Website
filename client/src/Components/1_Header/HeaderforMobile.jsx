import React, { Fragment, useEffect, useState } from "react";
import { BiHome, BiWallet } from "react-icons/bi";
import { BsBag, BsDiamondFill } from "react-icons/bs";
import { MdAccountBox } from "react-icons/md";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const HeaderforMobile = ({ handleMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    const item = localStorage.getItem("User");
    if (item) {
      setLoggedin(true);
    }
  }, []);
  return (
    <Fragment>
      <nav className="flex justify-top px-[40px] h-[100vh] w-full z-10 items-center bg-white fixed top-0 left-0 flex-col">
        <div className="flex justify-between items-center w-full  py-3 ">
          <Link to={"/"} className="logo w-[200px]">
            <img src="./logo.png" alt="Logo" />
          </Link>
          <button
            className="p-5 border-2 border-gray-600 rounded-md hover:bg-slate-200 transition-all duration-200"
            onClick={handleMenu}
          >
            <CgClose />
          </button>
        </div>
        <div className="navigation flex  flex-col justify-center gap-20 w-full px-20 py-20">
          <Link
            to="/"
            className="home flex justify-start gap-10 items-center  font-semibold text-2xl cursor-pointer hover:text-green-700 w-full "
          >
            <div className="icon">
              <BiHome style={{ fontSize: "35px" }} />
            </div>
            <p>Home</p>
          </Link>
          <Link
            to="/activity"
            className="activity flex justify-start gap-10  items-center  font-semibold  text-2xl cursor-pointer   hover:text-green-700 "
          >
            <div className="icon">
              <BsBag style={{ fontSize: "35px" }} />
            </div>
            <p>Activity</p>
          </Link>
          <Link
            to="/promotion"
            className="promotion flex justify-start gap-10  items-center  font-semibold text-2xl cursor-pointer  hover:text-green-700 "
          >
            <div className="icon">
              <BsDiamondFill style={{ fontSize: "35px" }} />
            </div>
            <p>Promotion</p>
          </Link>
          <Link
            to="/wallet"
            className="wallet flex justify-start gap-10  items-center  font-semibold text-2xl cursor-pointer  hover:text-green-700 "
          >
            <div className="icon">
              <BiWallet style={{ fontSize: "35px" }} />
            </div>
            <p>Wallet</p>
          </Link>
          <div
            className="account flex justify-start gap-10 items-center  font-semibold text-2xl cursor-pointer  hover:text-green-700 "
            style={{ position: "relative" }}
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          >
            <div className="icon">
              <MdAccountBox style={{ fontSize: "35px" }} />
            </div>
            <p className="flex justify-center items-center gap-[2px]">
              <span>Account</span>
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/8885/8885271.png"
                  alt=""
                  className="w-8 "
                />
              </span>
            </p>
            {dropdown ? (
              <div className="menu hover:text-black absolute top-20 bg-white py-5 shadow-lg w-[150px] rounded-2xl flex flex-col gap-5 ">
                {loggedin ? (
                  <Link
                    onClick={() => {
                      localStorage.removeItem("User");
                      setLoggedin(false);
                      alert("logout successfully completed");
                    }}
                    className="hover:bg-gray-200 py-2 w-full text-center"
                  >
                    Logout
                  </Link>
                ) : (
                  <Fragment>
                    <Link
                      to={"/account"}
                      className="hover:bg-gray-200 py-2 w-full text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to={"/register"}
                      className="hover:bg-gray-200 py-2 w-full text-center"
                    >
                      Register
                    </Link>
                  </Fragment>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default HeaderforMobile;
