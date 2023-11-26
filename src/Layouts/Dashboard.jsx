import { Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useDeliveryMan from "../Hooks/useDeliveryMan";
import Admin from "../Pages/Dashboard/Admin/Admin";
import User from "../Pages/Dashboard/User/User";
import DeliveryMan from "../Pages/Dashboard/DeliveryMan/DeliveryaMan";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isDeliveryMan] = useDeliveryMan();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-9 lg:grid-cols-9 min-h-[100vh]">
        <div className="col-span-2 bg-black text-white ">
          <div className="w-full bg-orange-600 p-4">
            <h3 className="text-3xl font-bold text-white text-center">
              Dashboard
            </h3>
          </div>
          <div className="mt-6 p-8 text-orange-300 text-center">
            <h3 className="text-2xl font-bold">ZAK-Parcel</h3>
            <p className="font-semibold text-lg ">Courier service</p>
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
        <div className="col-span-7 bg-orange-600">
          <div className="w-full bg-black p-4">
            <h3 className="text-3xl font-semibold text-white text-center">
              Hi! {user?.displayName}, Welcome to ZAK-parcel
            </h3>
          </div>
          <div className="bg-orange-600">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
