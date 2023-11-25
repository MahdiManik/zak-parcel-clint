import { FaBook, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <div className="flex flex-col mt-12 gap-5 font-bold">
        <NavLink
          className="hover:text-white text-black flex justify-start items-center gap-3"
          to={"/dashboard/admin-home"}
        >
          <span className="text-3xl">
            <IoIosHome />
          </span>
          Admin Home
        </NavLink>
        <NavLink
          className="hover:text-white text-black flex items-center gap-3"
          to={"/dashboard/add"}
        >
          <span className="text-2xl">
            <FaUtensils></FaUtensils>
          </span>
          add items
        </NavLink>
        <NavLink
          className="hover:text-white text-black flex items-center gap-3"
          to={"/dashboard/manage"}
        >
          <span className="text-2xl">
            <FaList></FaList>
          </span>
          manage items
        </NavLink>
        <NavLink
          className="hover:text-white text-black flex items-center gap-3
			"
          to={"/dashboard/booking"}
        >
          <span className="text-2xl">
            <FaBook></FaBook>
          </span>
          Manage bookings
        </NavLink>
        <NavLink
          className="hover:text-white text-black flex items-center gap-3
			"
          to={"/dashboard/users"}
        >
          <span className="text-2xl">
            <FaUsers></FaUsers>
          </span>
          All Users
        </NavLink>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20 card rounded-box place-items-start">
            <NavLink
              className="hover:text-white text-black flex items-center gap-2"
              to={"/"}
            >
              <span className="text-3xl">
                <IoIosHome />
              </span>
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
