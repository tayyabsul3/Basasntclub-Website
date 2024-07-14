import React, { Fragment, useEffect, useRef, useState } from "react";
import "./Auth.css";
import { FaLanguage, FaLessThan } from "react-icons/fa";
import { MailIcon, PhoneIcon } from "lucide-react";
import { BiLock, BiLockAlt } from "react-icons/bi";
import { BsLockFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Auth = () => {
  const [tab, setTab] = useState(1);
  const [usernameLogin, setLoginusername] = useState("");
  const [passwordLogin, setLoginpassword] = useState("");
  const [user, setuser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const { username, password } = user;

  const loginshifter = useRef();
  const signupshifter = useRef();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      // const { data } = await axios.post("http://localhost:3000/login", {
      //   username: usernameLogin,
      //   password: passwordLogin,
      // });
      const { data } = await axios.post("/login", {
        username: usernameLogin,
        password: passwordLogin,
      });
      console.log(data);
      const auth = {
        user: data.user,
        isAuthenticated: true,
      };
      localStorage.setItem("User", JSON.stringify(auth));
      setLoginusername("");
      setLoginpassword("");
    } catch (error) {
      console.error(error);
    }

    console.log({ usernameLogin, passwordLogin });

    setTimeout(() => {
      navigate("/");
    }, 1000); //
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
      <div className="top text-white bg-green-600 h-[21vh]">
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
        <div className="info px-6 py-5 ">
          <h1 className="font-semibold text-2xl">Log in</h1>
          <p className="flex flex-col gap-[-10px]">
            <span> Please log in with your phone or email</span>

            <span>
              if you forgot your password , Please contact customer service
            </span>
          </p>
        </div>
      </div>
      <div className="loginandsignupform   mt-0  flex justify-center items-center w-[95%] md:w-[35%] mx-auto">
        <div className="shifters ">
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
            className="active flex justify-center flex-col items-center gap-2 "
          >
            <span>
              <PhoneIcon />
            </span>
            <span>Log in with phone</span>
          </button>
          <button
            ref={signupshifter}
            onClick={() => {
              if (tab !== 2) {
                setTab(2);
                handleShift();
              } else {
                return;
              }
            }}
            className=" flex justify-center flex-col items-center gap-2"
          >
            <span>
              <MailIcon />
            </span>
            <span>Email Login</span>
          </button>
        </div>
        {tab === 1 && (
          <div className="login  w-full " style={{ marginTop: "0px" }}>
            <form onSubmit={handleLogin}>
              <div className="formfield mt-10">
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
                    className="w-[20%]   px-2 text-xl rounded-3xl py-4 focus:border-transparent "
                    readOnly
                  />
                  <input
                    type={tab === 1 ? "tel" : "email"}
                    id="email"
                    name="username"
                    value={usernameLogin}
                    placeholder="123-4567890"
                    required={true}
                    onChange={(e) => setLoginusername(e.target.value)}
                    className="w-[80%]    px-5 text-xl rounded-3xl py-4"
                    pattern="\d{3}-\d{7}"
                    maxLength={11}
                  />
                </div>
              </div>
              <div className="formfield mt-10">
                <label htmlFor="password" className="flex gap-5">
                  <span className="text-green-600">
                    <BiLock style={{ fontSize: "25px" }} />
                  </span>
                  <span className="font-thin">Password</span>
                </label>
                <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password..."
                    value={passwordLogin}
                    required={true}
                    onChange={(e) => setLoginpassword(e.target.value)}
                    className="w-full px-5 py-4 text-xl rounded-3xl"
                  />
                </div>
              </div>

              <div className="other flex flex-col gap-4 mx-auto px-10 py-5">
                <input type="submit" value={"Login"} className="py-3" />
                <Link
                  to={"/register"}
                  className="text-center rounded-3xl text-green-600 font-bold transition-all duration-200
                hover:bg-green-200 bg-white py-3 w-full 
                "
                >
                  Register
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
        {tab === 2 && (
          <div className="signup p-0 m-0 w-full">
            <form onSubmit={handleLogin}>
              <div className="formfield mt-10">
                <label htmlFor="username " className="flex gap-5">
                  <span className="text-green-600">
                    <MailIcon />
                  </span>
                  <span className="font-thin">Mail</span>
                </label>
                <div className="flex justify-center items-center gap-5">
                  <input
                    type={tab === 1 ? "tel" : "email"}
                    id="email"
                    name="username"
                    value={usernameLogin}
                    placeholder="Enter your email "
                    required={true}
                    onChange={(e) => setLoginusername(e.target.value)}
                    className="w-full   px-5 text-xl rounded-3xl py-4  valid:focus:border-red-500"
                  />
                </div>
              </div>
              <div className="formfield mt-10">
                <label htmlFor="password" className="flex gap-5">
                  <span className="text-green-600">
                    <BiLock style={{ fontSize: "25px" }} />
                  </span>
                  <span className="font-thin">Password</span>
                </label>
                <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password..."
                    value={passwordLogin}
                    required={true}
                    onChange={(e) => setLoginpassword(e.target.value)}
                    className="w-full px-5 py-4 text-xl rounded-3xl"
                  />
                </div>
              </div>

              <div className="other flex flex-col gap-4 mx-auto px-10 py-5">
                <input type="submit" value={"Login"} className="py-3" />
                <Link
                  to={"/register"}
                  className="text-center rounded-3xl text-green-600 font-bold transition-all duration-200
                hover:bg-green-200 bg-white py-3 w-full 
                "
                >
                  Register
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

export default Auth;
