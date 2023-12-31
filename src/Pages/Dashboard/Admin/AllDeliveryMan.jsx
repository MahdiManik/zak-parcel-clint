import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState, useEffect } from "react";

const AllDeliveryMan = () => {
  const [deliveryMan, setDeliveryMan] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get("/users/delivery-man")
      .then((res) => {
        setDeliveryMan(res.data);
      })
      .catch((error) => {
        console.error("Error fetching delivery men:", error);
      });
  }, [axiosSecure]);
  
  return (
    <div className="mt-12">
      <h3 className="text-5xl font-bold text-center text-white border-2 p-4 w-4/6 mx-auto flex flex-col justify-center items-center">
        All Delivery Man ({deliveryMan?.length})
      </h3>
      <table className="table mt-6 border-4 mx-auto w-[1050px]">
        <thead className=" text-black bg-white text-[15px]">
          <tr>
            <th>Delivery Mans Name</th>
            <th>Phone Number</th>
            <th>delivered Number</th>
            <th>Average review</th>
          </tr>
        </thead>
        {deliveryMan?.map((person) => (
          <tbody key={person?._id}>
            {/* row 1 */}
            <tr className=" text-white text-[14px] font-semibold">
              <td>{person?.name}</td>
              <td>{person?.phone}</td>
              <td>{person?.email}</td>
              <td>{person?.userType}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllDeliveryMan;
