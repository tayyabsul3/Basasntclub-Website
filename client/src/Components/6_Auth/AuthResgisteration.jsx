import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Auth.css";
import { FaLanguage, FaLessThan } from "react-icons/fa";
import { MailIcon, PhoneIcon } from "lucide-react";
import { BiLock, BiLockAlt } from "react-icons/bi";
import { BsLockFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const AuthResgisteration = () => {
  const [tab, setTab] = useState(1);
  const naviagte = useNavigate();
  const [usernameRegister, setRegisterusername] = useState("");
  const [passwordRegister, setRegisterpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginshifter = useRef();
  const signupshifter = useRef();

  async function handleRegister(e) {
    e.preventDefault();

    if (passwordRegister !== confirmPassword) {
      alert("Password do not match");
      setRegisterpassword("");
      setConfirmPassword("");
      return;
    }

    try {
      console.log("before");
      const { data } = await axios.post("/register", {
        username: usernameRegister,
        password: passwordRegister,
      });
      console.log("after");

      console.log(data);
      const item = {
        user: data.newUser,
        isAuthenticated: true,
      };
      localStorage.setItem("User", JSON.stringify(item));
      console.log(usernameRegister, passwordRegister, confirmPassword);
    } catch (error) {
      console.error(error);
      alert("Failed to register");
      return;
    }
    setRegisterusername("");
    setRegisterpassword("");
    setConfirmPassword("");

    setTimeout(() => {
      naviagte("/");
    }),
      1000;
  }

  function handleShift() {
    if (tab === 1) {
      loginshifter.current.classList.remove("active");
      signupshifter.current.classList.add("active");
    } else {
      loginshifter.current.classList.add("active");
      signupshifter.current.classList.remove("active");
    }
  }

  return (
    <Fragment>
      <div className="top text-white bg-green-600 h-[20vh]">
        <div className="header flex justify-between items-center px-6 py-5 text-2xl">
          <Link to={"/"}>
            <FaLessThan />
          </Link>
          <p className="font-bold ">BASANTCLUB</p>
          <p className="flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4628/4628635.png"
              alt=""
              className="w-8 mx-2"
            />
            <span>EN</span>
          </p>
        </div>
        <div className="info px-6 py-6 mb-10 ">
          <h1 className="font-semibold text-2xl">Register</h1>
          <p className=" pb-20 ">
            <span> Please Register with your phone or username</span>
          </p>
        </div>
      </div>
      <div className="loginandsignupform bg-transparent  mx-auto flex justify-center items-center">
        <div className="shifters  ">
          <button
            ref={loginshifter}
            onClick={() => {
              if (tab !== 1) {
                setTab(1);
                handleShift();
              } else {
                return;
              }
            }}
            className="active flex justify-center flex-col items-center gap-2 text-xl"
          >
            <span>
              <PhoneIcon />
            </span>
            <span>Register your phone</span>
          </button>
        </div>
        {tab === 1 && (
          <div className="login p-0 m-0 w-full ">
            <form onSubmit={handleRegister}>
              <div className="formfield mt-5">
                <label htmlFor="username " className="flex gap-5">
                  <span className="text-green-600">
                    <PhoneIcon />
                  </span>
                  <span className="font-thin">Phone number</span>
                </label>
                <div className="flex justify-center items-center gap-5">
                  <input
                    type="text"
                    placeholder="+92"
                    className="w-[20%]   px-5 text-xl rounded-3xl py-4 focus:border-transparent outline-transparent"
                    readOnly
                  />
                  <input
                    type="tel"
                    id="username"
                    name="username"
                    value={usernameRegister}
                    placeholder="123-4567890 "
                    required={true}
                    onChange={(e) => setRegisterusername(e.target.value)}
                    className="w-[80%]   px-5 text-xl rounded-3xl py-4"
                    pattern="\d{3}-\d{7}"
                    maxLength={11}
                  />
                </div>
              </div>
              <div className="formfield mt-5">
                <label htmlFor="password" className="flex gap-4">
                  <span className="text-green-600">
                    <BiLock style={{ fontSize: "25px" }} />
                  </span>
                  <span className="font-thin">Set Password</span>
                </label>
                <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password..."
                    value={passwordRegister}
                    required={true}
                    onChange={(e) => setRegisterpassword(e.target.value)}
                    className="w-full px-5 py-4 text-xl rounded-3xl"
                  />
                </div>
              </div>
              <div className="formfield mt-5">
                <label htmlFor="password" className="flex gap-4">
                  <span className="text-green-600">
                    <BiLock style={{ fontSize: "25px" }} />
                  </span>
                  <span className="font-thin">Confirm Password</span>
                </label>
                <div>
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm password..."
                    value={confirmPassword}
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-5 py-4 text-xl rounded-3xl"
                  />
                </div>
              </div>

              <div className="other flex flex-col gap-2">
                <input type="submit" value={"Register"} />
                <Link
                  to={"/account"}
                  className=" rounded-3xl  transition-all duration-200
                hover:bg-green-200 bg-white py-3 flex justify-center items-center gap-5
                mt-2
                "
                >
                  <span className="text-gray-400">I have an account</span>
                  <span className="text-2xl text-green-600 font-bold">
                    Login
                  </span>
                </Link>
              </div>
            </form>
            <div className="flex justify-around w-full items-center mt-5">
              <button className="forgotPassowrd flex flex-col justify-center items-center text-xl gap-3 text-green-700">
                <BsLockFill style={{ fontSize: "30px" }} />
                <p>Forgot Password</p>
              </button>
              <button className="CustSupport flex flex-col justify-center items-center text-xl gap-3 text-green-700">
                <RiCustomerService2Fill style={{ fontSize: "30px" }} />
                <p>Customer Service</p>
              </button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default AuthResgisteration;
