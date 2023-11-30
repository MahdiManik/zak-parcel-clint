import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MyParcelRow = ({ parcel, refetch }) => {
  const [infos, setInfos] = useState([]);
  const [info, setInfo] = useState("");
  const disabled = true;
  const { _id, email, parcelType, requestedDeliveryDate, bookingDate, status } =
    parcel || {};
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`/parcel-info?email=${email}`).then((res) => {
      setInfos(res.data);
    });
  }, [axiosPublic, email, status, info?.status]);

  useEffect(() => {
    if (infos.length > 0) {
      // Assuming you want to set info to the first item in the array
      setInfo(infos[0]);
    }
  }, [infos]);

  const handleCancel = async (id) => {
    try {
      const response = await axiosPublic.patch(`/parcel/${id}`, {
        status: "cancel",
      });
      refetch();

      if (response.data.modifiedCount > 0) {
        console.log("Booking status updated successfully", response.data);

        // Immediately refetch data after canceling
        refetch();
      } else {
        console.log("Booking not found or status not updated", response.data);
      }
    } catch (error) {
      console.error("Error updating status:", error);
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
          <p className="rounded-lg btn btn-sm bg-white  text-center text-black">
            {status}
          </p>
        </td>
        <td className="p-3">
          {status === "pending" ? (
            <Link
              to={`/dashboard/update-booking/${_id}`}
              className="btn btn-ghost btn-sm bg-black"
            >
              Update
            </Link>
          ) : (
            <Link
              to={`/dashboard/update-booking/${_id}`}
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
              to={`/dashboard/payment/${_id}`}
              className="btn btn-ghost btn-sm bg-black"
              disabled={disabled}
            >
              Pay
            </Link>
          ) : (
            <Link
              to={`/dashboard/payment/${_id}`}
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
