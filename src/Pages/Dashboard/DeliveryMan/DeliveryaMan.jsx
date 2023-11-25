import { FaShoppingCart } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { NavLink } from "react-router-dom";

const DeliveryMan = () => {
  return (
    <div>
      <div className="flex flex-col mt-12 gap-5 font-bold">
        <NavLink
          className="hover:text-white  flex justify-start items-center gap-3"
          to={"/dashboard/delivery-man-home"}
        >
          <span className="text-3xl">
            <IoIosHome />
          </span>
          DeliveryMan Home
        </NavLink>
        <NavLink
          className="hover:text-white flex items-center gap-3"
          to={"/dashboard"}
        >
          <span className=""></span>
          reservation
        </NavLink>
        <NavLink
          className="hover:text-white flex items-center gap-3"
          to={"/dashboard/payment-history"}
        >
          <span className=""></span>
          Payment history
        </NavLink>
        <NavLink
          className="hover:text-white  flex items-center gap-3
			"
          to={"/dashboard/cart"}
        >
          <span className="text-3xl">
            <FaShoppingCart />
          </span>
          My Cart
        </NavLink>

        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
          <div className="grid h-20 card rounded-box place-items-start">
            <NavLink
              className="hover:text-white flex items-center gap-2"
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

export default DeliveryMan;
