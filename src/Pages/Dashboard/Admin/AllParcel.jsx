import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AllParcel = () => {
  const [status, setStatus] = useState("");
  const [deliveryMan, setDeliveryMan] = useState([]);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: parcel = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosPublic.get(`bookings`);
      console.log(res.data);
      return res.data;
    },
  });

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

  const handleManage = async (e, id) => {
    e.preventDefault();

    const response = await axiosPublic.patch(`/parcel/${id}`, {
      status: status,
    });

    if (response.data.modifiedCount > 0) {
      console.log("Booking status updated successfully", response.data);
      // how to change status value in this line, i went to status value update with "On the way" please do that
      setStatus("On the way");
    } else {
      console.log("Booking not found or status not updated");
    }

    const form = e.target;
    const deliveryManId = form.deliveryManId.value;
    const approximateDate = form.approximateDate.value;

    const data = {
      deliveryManId,
      approximateDate,
      status: status,
    };
    const res = await axiosPublic.post("/parcel-info", data);
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        icon: "success",
        text: "Data create and save on database",
      });
    }
  };

  return (
    <div className="mt-12 p-6">
      <h3 className="text-5xl font-bold text-center text-white border-2 p-4 w-96 mx-auto flex flex-col justify-center items-center">
        All Parcel ({parcel?.length})
      </h3>

      <div>
        <table className="table mt-6 border-4">
          <thead className=" text-black bg-white text-[15px]">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Booked date</th>
              <th>Requested Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {parcel?.map((item) => (
            <tbody key={item?._id}>
              {/* row 1 */}
              <tr className=" text-white text-[14px] font-semibold">
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.bookingDate}</td>
                <td>{item?.requestedDeliveryDate}</td>
                <td>{item?.price}</td>
                <td>
                  <p className="rounded-lg btn-sm bg-white text-black">
                    {status ? status : item?.status}
                  </p>
                </td>
                <td>
                  <button
                    className="btn btn-ghost btn-sm bg-black"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Mange
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box   text-black">
                      <div className="modal-action flex flex-col justify-center items-center gap-4">
                        <form
                          onSubmit={(e) => handleManage(e, item?._id)}
                          className="flex flex-col justify-center items-center gap-2"
                        >
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-lg">
                                Delivery Man Id
                              </span>
                            </label>
                            <select
                              type="text"
                              name="deliveryManId"
                              className="input input-bordered w-96"
                            >
                              {deliveryMan?.map((person) => (
                                <option
                                  className=""
                                  key={person?._id}
                                  value={person?._id}
                                >
                                  {person?._id}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-lg">
                                Approximate Date
                              </span>
                            </label>
                            <input
                              name="approximateDate"
                              className="input input-bordered w-96"
                              type="date"
                            />
                          </div>
                          <input
                            className="btn btn-ghost mt-6 bg-black text-white hover:text-black"
                            type="submit"
                            value="Manage"
                          />
                        </form>
                        <div className="mt-2 flex justify-center items-center">
                          <form method="dialog">
                            <button className="btn btn-ghost bg-black text-white hover:text-black">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllParcel;
