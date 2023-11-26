import { FaBookmark, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { NavLink } from "react-router-dom";

const User = () => {
  return (
    <div>
      <div className="flex flex-col mt-12 gap-5  font-bold px-8">
        <NavLink
          className="hover:text-white btn btn-ghost bg-orange-600 w-full flex items-center gap-3"
          to={"/dashboard/book-parcel"}
        >
          <span className="text-2xl">
            <FaBookmark />
          </span>
          Book a Parcel
        </NavLink>
        <NavLink
          className="hover:text-white btn btn-ghost bg-orange-600 w-full flex items-center gap-3"
          to={"/dashboard/my-parcel"}
        >
          <span className="text-2xl">
            <FaShoppingCart />
          </span>
          My Parcel
        </NavLink>
        <NavLink
          className="hover:text-white btn btn-ghost bg-orange-600 w-full  flex items-center gap-3
			"
          to={"/dashboard/user-profile"}
        >
          <span className="text-2xl">
            <FaUser />
          </span>
          My Profile
        </NavLink>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider border-t-2"></div>
          <div className="grid h-20 card rounded-box place-items-start">
            <NavLink
              className="hover:text-white btn btn-ghost bg-orange-600 w-full flex items-center gap-2"
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

export default User;
