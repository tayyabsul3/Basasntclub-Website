import React, { Fragment, useEffect, useState } from "react";
import { BiHome, BiMenu, BiWallet } from "react-icons/bi";
import { BsBag, BsDiamondFill } from "react-icons/bs";
import { MdAccountBox } from "react-icons/md";
import HeaderforMobile from "./HeaderforMobile";
import { Link } from "react-router-dom";

const Header = () => {
  const [hamburgermenu, setHamburgermenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  function handleMenu() {
    setHamburgermenu((prev) => !prev);
  }

  useEffect(() => {
    const item = localStorage.getItem("User");
    if (item) {
      setLoggedin(true);
    }
  }, []);

  return (
    <Fragment>
      <nav className="flex justify-between px-[40px]  items-center bg-white  ">
        <Link to="/" className="logo w-[200px]">
          <img src="./logo.png" alt="Logo" />
        </Link>
        <div className="navigation lg:flex justify-center gap-20 hidden">
          <Link
            to={"/"}
            className="home flex justify-center items-center flex-col font-semibold text-xl cursor-pointer hover:text-green-700 "
          >
            <div className="icon">
              <BiHome style={{ fontSize: "25px" }} />
            </div>
            <p>Home</p>
          </Link>
          <Link
            to={"/activity"}
            className="activity flex justify-center items-center flex-col font-semibold  text-xl cursor-pointer   hover:text-green-700 "
          >
            <div className="icon">
              <BsBag style={{ fontSize: "25px" }} />
            </div>
            <p>Activity</p>
          </Link>
          <Link
            to={"/promotion"}
            className="promotion flex justify-center items-center flex-col font-semibold text-xl cursor-pointer  hover:text-green-700 "
          >
            <div className="icon">
              <BsDiamondFill style={{ fontSize: "25px" }} />
            </div>
            <p>Promotion</p>
          </Link>
          <Link
            to={"/wallet"}
            className="wallet flex justify-center items-center flex-col font-semibold text-xl cursor-pointer  hover:text-green-700 "
          >
            <div className="icon">
              <BiWallet style={{ fontSize: "25px" }} />
            </div>
            <p>Wallet</p>
          </Link>
          <div
            className="account flex justify-center items-center flex-col
            font-semibold text-xl cursor-pointer hover:text-green-700 "
            text-3xl
            style={{ position: "relative" }}
            onClick={() => {
              setDropdown((prev) => !prev);
            }}
          >
            <div className="icon">
              <MdAccountBox style={{ fontSize: "25px" }} />
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
              <div className="menu hover:text-black absolute top-20 bg-white py-5 shadow-lg w-[150px] rounded-2xl flex flex-col gap-5 z-20">
                {loggedin ? (
                  <Link
                    onClick={() => {
                      localStorage.removeItem("User");
                      setLoggedin(false);
                      alert("logout successfully completed");
                    }}
                    className="hover:bg-gray-200 py-2 w-full text-center "
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
        <button
          className="p-2  border-2 border-gray-600 rounded-md hover:bg-slate-300 transition-all duration-200 lg:hidden"
          onClick={handleMenu}
        >
          <BiMenu style={{ fontSize: "25px" }} />
        </button>
        {hamburgermenu ? <HeaderforMobile handleMenu={handleMenu} /> : ""}
      </nav>
    </Fragment>
  );
};

export default Header;
