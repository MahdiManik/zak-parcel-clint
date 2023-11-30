//import { useEffect, useState } from "react";
//import useAxiosSecure from "../../../Hooks/useAxiosSecure";
//
//const MyDeliveryList = () => {
//  const axiosSecure = useAxiosSecure();
//  const [booked, setBooked] = useState([]);
//  const [infos, setInfos] = useState([]);
//  const [info, setInfo] = useState("");
//
//  const { deliveryManId } = info || {};
//  console.log(deliveryManId);
//
//  useEffect(() => {
//    axiosSecure
//      .get(`/info-parcel`)
//      .then((res) => {
//        //console.log(res.data);
//        setInfos(res.data);
//      })
//      .catch((error) => {
//        console.error("Error fetching delivery men:", error);
//      });
//  }, [axiosSecure]);
//
//  useEffect(() => {
//    if (infos?.length > 0) {
//      infos.filter((i) => {
//        setInfo(i);
//      });
//    }
//  });
//  console.log(info);
//
//  useEffect(() => {
//    axiosSecure
//      .get(`/booking-deliveryMan/${deliveryManId}`)
//      .then((res) => {
//        setBooked(res.data);
//      })
//      .catch((error) => {
//        console.error("Error fetching delivery men:", error);
//      });
//  }, [axiosSecure, deliveryManId]);
//  console.log(booked);

import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyDeliveryList = () => {
  const axiosSecure = useAxiosSecure();
  const [booked, setBooked] = useState([]);
  const [infos, setInfos] = useState([]);
  const [info, setInfo] = useState("");

  useEffect(() => {
    axiosSecure
      .get(`/info-parcel`)
      .then((res) => {
        setInfos(res.data);
      })
      .catch((error) => {
        console.error("Error fetching delivery men:", error);
      });
  }, [axiosSecure]);

  useEffect(() => {
    if (infos?.length > 0) {
      // Assuming you want to set info to the first item in the array
      setInfo(infos[0]);
    }
  }, [infos]);

  useEffect(() => {
    // Check if info?.deliveryManId is defined before making the API call
    if (info?.deliveryManId) {
      axiosSecure
        .get(`/booking-deliveryMan/${info?.deliveryManId}`)
        .then((res) => {
          setBooked(res.data);
        })
        .catch((error) => {
          console.error("Error fetching bookings:", error);
        });
    }
  }, [axiosSecure, info?.deliveryManId]);

  console.log(booked);
  console.log(info?.deliveryManId);

  return (
    <div className="mt-12">
      <h3 className="text-5xl font-bold text-center text-white border-2 p-4 w-4/6 mx-auto flex flex-col justify-center items-center">
        Delivery Man all booked ({booked?.length})
      </h3>
      <table className="table mt-6 border-4 mx-auto w-[1050px]">
        <thead className=" text-black bg-white text-[15px]">
          <tr>
            <th>Users Name</th>
            <th>Phone Number</th>
            <th>Booked Number</th>
            <th>Make Delivery Men</th>
            <th>Make Admin</th>
          </tr>
        </thead>
        {booked?.map((item) => (
          <tbody key={item?._id}>
            {/* row 1 */}
            <tr className=" text-white text-[14px] font-semibold">
              <td>{item?.name}</td>
              <td>{item?.phone}</td>
              <td>Booked Parcel ({item?.bookingCount})</td>
              <td></td>
              <td>
                <button className="btn btn-ghost text-3xl">Deliver this</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyDeliveryList;
