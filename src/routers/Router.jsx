import { BrowserRouter, Routes, Route } from "react-router-dom";
//pages
import Dashbord from "../pages/Dashbord";
import Users from "../pages/Users";
import Shopping from "../pages/Shopping";
import Assigment from "../pages/Assigment";
import Store from "../pages/Store";
import Star from "../pages/Star";
import History from "../pages/History";
import Settings from "../pages/Settings";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/users" element={<Users />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/assigment" element={<Assigment />} />
        <Route path="/store" element={<Store />} />
        <Route path="/star" element={<Star />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
