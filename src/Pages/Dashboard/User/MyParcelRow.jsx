//import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const MyParcelRow = ({ parcel }) => {
  const [infos, setInfos] = useState([]);
  const disabled = true;
  const { parcelType, requestedDeliveryDate, bookingDate, status } =
    parcel || {};
  console.log("parcel", parcel);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/parcel-info`).then((res) => {
      console.log("infos", res.data);
      setInfos(res.data);
    });
  }, [axiosPublic]);

  return infos?.map((info) => (
    <tbody key={info?._id}>
      <tr className="border-b border-opacity-20 text-xs">
        <td className="p-3">
          <p>{parcelType}</p>
        </td>
        <td className="p-3">
          <p>{requestedDeliveryDate}</p>
        </td>
        <td className="p-3">
          <p>{info?.approximateDate}</p>
        </td>
        <td className="p-3">
          <p>{bookingDate}</p>
        </td>
        <td className="p-3">
          <p>{info?.deliveryManId}</p>
        </td>
        <td className="p-3">
          <button className="rounded-lg btn-sm bg-white text-black">
            {status}
          </button>
        </td>
        <td className="p-3">
          {status === "pending" ? (
            <Link
              to={"/dashboard/update-booking"}
              className="btn btn-ghost btn-sm bg-black"
            >
              Update
            </Link>
          ) : (
            <Link
              to={"/dashboard/update-booking"}
              disabled={disabled}
              className="btn btn-ghost btn-sm bg-black"
            >
              Update
            </Link>
          )}
        </td>
        <td className="p-3">
          {status === "pending" ? (
            <button
              className="btn btn-ghost btn-sm bg-black"
              //onClick={handleCancel}
            >
              Cancel
            </button>
          ) : (
            <button
              disabled={disabled}
              className="btn btn-ghost btn-sm bg-black"
            >
              Cancel
            </button>
          )}
        </td>
        <td className="p-3">
          <button
            className="btn btn-ghost btn-sm bg-black"
            //  onClick={handlePay}
          >
            Pay
          </button>
        </td>
        <td className="p-3 text-right">
          <button
            className="btn btn-ghost btn-sm bg-black"
            //onClick={handleReview}
          >
            Review
          </button>
        </td>
        <td className="p-3 text-right"></td>
      </tr>
    </tbody>
  ))();
};

export default MyParcelRow;
