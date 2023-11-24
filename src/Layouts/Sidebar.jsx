import { IoNotifications } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col w-52 justify-center items-center list-none mt-20 gap-2  h-52 bg-orange-500">
        <li>
          <NavLink className="font-bold hover:underline text-white" to={"/"}>
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
  );
};

export default Sidebar;
