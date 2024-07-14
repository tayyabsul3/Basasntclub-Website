import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Hero from "./Components/2_Hero/Hero.jsx";
import Naviagtion from "./Components/Naviagtion.jsx";
import Footer from "./Components/4_Footer/Footer.jsx";
import Activity from "./Components/5_Pages/Activity.jsx";
import Promotion from "./Components/5_Pages/Promotion.jsx";
import Wallet from "./Components/5_Pages/Wallet.jsx";
import Auth from "./Components/6_Auth/Auth.jsx";
import AuthResgisteration from "./Components/6_Auth/AuthResgisteration.jsx";
import ProtectedRoute from "./Components/Protectedroute.jsx";
import Header from "./Components/1_Header/Header.jsx";
import Slots from "./Components/5_Pages/Slots.jsx";
import Lottery from "./Components/5_Pages/Lottery.jsx";
import Original from "./Components/5_Pages/Original.jsx";
import Runmmy from "./Components/3_Popular/Runmmy.jsx";
import Sports from "./Components/3_Popular/Sports.jsx";

function Layout() {
  return (
    <div>
      <Header />
      <Hero />
      <Naviagtion />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      {
        path: "/slots",
        element: (
          <ProtectedRoute>
            <Slots />
          </ProtectedRoute>
        ),
      },
      {
        path: "/lottery",
        element: (
          <ProtectedRoute>
            <Lottery />
          </ProtectedRoute>
        ),
      },
      {
        path: "/original",
        element: (
          <ProtectedRoute>
            <Original />
          </ProtectedRoute>
        ),
      },
      {
        path: "/casino",
        element: (
          <ProtectedRoute>
            <Slots />
          </ProtectedRoute>
        ),
      },
      {
        path: "/rummy",
        element: (
          <ProtectedRoute>
            <Runmmy />
          </ProtectedRoute>
        ),
      },
      {
        path: "/sports",
        element: (
          <ProtectedRoute>
            <Sports />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/activity",
    element: (
      <ProtectedRoute>
        <Activity />
      </ProtectedRoute>
    ),
  },
  {
    path: "/promotion",
    element: (
      <ProtectedRoute>
        <Promotion />
      </ProtectedRoute>
    ),
  },
  {
    path: "/wallet",
    element: (
      <ProtectedRoute>
        <Wallet />
      </ProtectedRoute>
    ),
  },
  { path: "/account", element: <Auth /> },
  { path: "/register", element: <AuthResgisteration /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
