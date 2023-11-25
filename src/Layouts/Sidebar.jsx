import { IoNotifications } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Sidebar = () => {
  const { user, LogOut } = useAuth();

  const handleLogOut = () => {
    LogOut();
  };
  return (
    <div>
      <div className="flex flex-col w-52 justify-center items-center list-none mt-20 gap-2  h-52 bg-orange-500">
        <li>
          <NavLink
            className="font-bold hover:underline btn btn-ghost text-white"
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="font-bold hover:underline text-2xl btn btn-ghost text-white"
            to={"/notification"}
          >
            <IoNotifications />
          </NavLink>
        </li>
        {user ? (
          <button
            className="btn btn-ghost w-full text-white"
            onClick={handleLogOut}
          >
            LogOut
          </button>
        ) : (
          <li>
            <NavLink
              className="font-bold hover:underline text-white"
              to={"/login"}
            >
              Login
            </NavLink>
          </li>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
