import { Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";
import Admin from "../Pages/Dashboard/Admin/Admin";
import User from "../Pages/Dashboard/User/User";
import DeliveryMan from "../Pages/Dashboard/DeliveryMan/DeliveryaMan";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isDeliveryMan] = useDeliveryMan();
  console.log(isDeliveryMan);
  return (
    <div className="grid grid-cols-9 min-h-[100vh] font-cinzel">
      <div className="col-span-2 bg-orange-400 text-black p-8">
        <div className="mt-6 ">
          <h3 className="text-2xl font-bold">ZAK-Parcel</h3>
          <p className="font-semibold text-lg tracking-[3px]">
            Courier service
          </p>
        </div>
        {isAdmin ? (
          <>
            <Admin />
          </>
        ) : isDeliveryMan ? (
          <>
            <DeliveryMan />
          </>
        ) : (
          <>
            <User />
          </>
        )}
      </div>
      <div className="col-span-7 p-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
