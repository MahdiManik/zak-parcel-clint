import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const MyParcelRow = ({ parcel }) => {
  const [infos, setInfos] = useState([]);
  const [info, setInfo] = useState("");
  const disabled = true;
  const { _id, email, parcelType, requestedDeliveryDate, bookingDate, status } =
    parcel || {};
  //console.log("parcel", email);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/parcel-info?email=${email}`).then((res) => {
      //  console.log("API response:", res.data);
      setInfos(res.data);
    });
  }, [axiosPublic, email, status, info?.status]);
  //  console.log("infos after set:", infos);

  useEffect(() => {
    if (infos.length > 0) {
      infos.forEach((info) => {
        setInfo(info);
      });
    }
  }, [infos]);

  const handleCancel = async (id) => {
    const response = await axiosPublic.patch(`/parcel/${id}`, {
      status: "cancel",
    });

    if (response.data.modifiedCount > 0) {
      console.log("Booking status updated successfully", response.data);
    } else {
      console.log("Booking not found or status not updated", response.data);
    }
  };

  return (
    <tbody>
      <tr className="border-b border-opacity-20 text-xs">
        <td className="p-3">
          <p>{parcelType}</p>
        </td>
        <td className="p-3">
          <p>{bookingDate}</p>
        </td>

        <td className="p-3">
          <p>{requestedDeliveryDate}</p>
        </td>

        <td className="p-3">
          <p>
            {status === "pending" || status === "cancel"
              ? ""
              : info?.approximateDate}
          </p>
        </td>
        <td className="p-3">
          <p>
            {status === "pending" || status === "cancel"
              ? ""
              : info?.deliveryManId}
          </p>
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
              onClick={() => handleCancel(_id)}
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
          {status === "cancel" ? (
            <Link
              to={"/dashboard/payment"}
              className="btn btn-ghost btn-sm bg-black"
              disabled={disabled}
            >
              Pay
            </Link>
          ) : (
            <Link
              to={"/dashboard/payment"}
              className="btn btn-ghost btn-sm bg-black"
            >
              Pay
            </Link>
          )}
        </td>
        <td className="p-3 text-right">
          {status === "cancel" ? (
            <Link
              to={"/dashboard/review"}
              className="btn btn-ghost btn-sm bg-black"
              disabled={disabled}
            >
              Review
            </Link>
          ) : (
            <Link
              to={"/dashboard/review"}
              className="btn btn-ghost btn-sm bg-black"
            >
              Review
            </Link>
          )}
        </td>
        <td className="p-3 text-right"></td>
      </tr>
    </tbody>
  );
};

export default MyParcelRow;
