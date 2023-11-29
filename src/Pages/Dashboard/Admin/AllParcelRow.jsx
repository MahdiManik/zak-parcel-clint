import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AllParcelRow = ({ item, refetch }) => {
  //  const [status, setStatus] = useState("");
  const [deliveryMan, setDeliveryMan] = useState([]);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const disabled = true;
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

  //  handle for Manage booking status chang
  const handleManage = async (e, id) => {
    e.preventDefault();
    refetch();
    const response = await axiosPublic.patch(`/parcel/${id}`, {
      status: "On the way",
    });

    if (response.data.modifiedCount > 0) {
      refetch();
      console.log("Booking status updated successfully", response.data);
    } else {
      console.log("Booking not found or status not updated", response.data);
    }

    const form = e.target;
    const deliveryManId = form.deliveryManId.value;
    const approximateDate = form.approximateDate.value;
    const email = form.email.value;

    const data = {
      deliveryManId,
      approximateDate,
      status: status,
      email,
    };
    const res = await axiosPublic.post("/parcel-info", data);
    console.log(res.data);
    if (res.data.insertedId) {
      refetch();
      Swal.fire({
        icon: "success",
        position: "top-end",
        text: "Data create and save on database",
      });
    }
  };

  return (
    <tbody>
      {/* row 1 */}
      <tr className=" text-white text-[14px] font-semibold">
        <td>{item?.name}</td>
        <td>{item?.phone}</td>
        <td>{item?.bookingDate}</td>
        <td>{item?.requestedDeliveryDate}</td>
        <td>{item?.price}</td>
        <td>
          <p className="rounded-lg btn-sm bg-white text-black">
            {item?.status}
          </p>
        </td>
        <td>
          {item?.status === "pending" ? (
            <>
              <button
                className="btn btn-ghost btn-sm bg-black"
                onClick={() =>
                  document.getElementById(`${item?._id}`).showModal()
                }
              >
                Mange
              </button>
              <dialog id={`${item?._id}`} className="modal">
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

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-lg">
                            customer Email
                          </span>
                        </label>
                        <input
                          name="email"
                          className="input input-bordered w-96"
                          type="text"
                          defaultValue={item?.email}
                          readOnly
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
            </>
          ) : (
            <>
              <button
                className="btn btn-ghost btn-sm bg-black"
                disabled={disabled}
                onClick={() =>
                  document.getElementById(`${item?._id}`).showModal()
                }
              >
                Mange
              </button>
            </>
          )}
        </td>
      </tr>
    </tbody>
  );
};

export default AllParcelRow;
