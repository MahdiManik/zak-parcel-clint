import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBox } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineLegendToggle } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="drawer bg-orange-500  z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="w-full navbar ">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost text-3xl text-white"
              >
                <MdOutlineLegendToggle />
              </label>
            </div>
            <div className="flex-1 gap-2 py-3 text-white text-3xl font-semibold px-2 mx-2">
              <FaBox />
              ZAK-Parcel
            </div>
            <div className="flex-none hidden  lg:block ">
              <div className="flex justify-center text-lg items-center list-none gap-6  mx-6  mr-32">
                <li>
                  <NavLink
                    className="font-bold hover:underline text-white"
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="font-bold hover:underline text-2xl text-white"
                    to={"/notification"}
                  >
                    <IoNotifications />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="font-bold hover:underline text-white"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
