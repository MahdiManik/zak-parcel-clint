import { Outlet } from "react-router";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
