import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Home from "../pages/Home";
import Dashbord from "../pages/Dashbord";
import Users from "../pages/Users";
import Shopping from "../pages/Shopping";
import Assigment from "../pages/Assigment";
import Store from "../pages/Store";
import Star from "../pages/Star";
import History from "../pages/History";
import Settings from "../pages/Settings";

import "../App.css";
import Logo from "../images/logo.svg";
//react router dom
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="bg-white border w-24 h-screen flex flex-col items-center justify-center">
      <BrowserRouter>
        <div className="w-[90%]  h-[95%] flex flex-col items-center gap-8">
          <span className="mt-[-6px]">
            <img src={Logo} alt="" />
          </span>

          <ul className="bg-[#6e8bb727] gap-1 items-center rounded-md w-10 h-[305px] flex flex-col ul-item overflow-hidden">
            <Link
              to="/dashbord"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-square-poll-vertical"></i>
              </li>
            </Link>
            <Link
              to="/shopping"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-cart-shopping"></i>
              </li>
            </Link>{" "}
            <Link
              to="/assigment"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-basket-shopping"></i>
              </li>
            </Link>
            <Link
              to="/store"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-shop"></i>
              </li>
            </Link>
            <Link
              to="/star"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </Link>
            <Link
              to="/history"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-clock-rotate-left"></i>
              </li>
            </Link>
            <Link
              to="/settings"
              className="rounded-md text-[#6E8BB7] active:bg-blue-500 focus-within:bg-blue-500 focus-within:text-white"
            >
              <li>
                <i className="fa-solid fa-gear"></i>
              </li>
            </Link>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashbord" element={<Dashbord />} />
            <Route path="/users" element={<Users />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/assigment" element={<Assigment />} />
            <Route path="/store" element={<Store />} />
            <Route path="/star" element={<Star />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
