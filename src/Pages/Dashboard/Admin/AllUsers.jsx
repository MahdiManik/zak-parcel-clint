import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get("/users/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("Error fetching delivery men:", error);
      });
  }, [axiosSecure]);

  return (
    <div className="mt-12">
      <h3 className="text-5xl font-bold text-center text-white border-2 p-4 w-4/6 mx-auto flex flex-col justify-center items-center">
        All Delivery Man ({users?.length})
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
        {users?.map((person) => (
          <tbody key={person?._id}>
            {/* row 1 */}
            <tr className=" text-white text-[14px] font-semibold">
              <td>{person?.name}</td>
              <td>{person?.phone}</td>
              <td>{person?.email}</td>
              <td>
                <button className="btn btn-ghost text-3xl">
                  <FaUserCircle />
                </button>
              </td>
              <td>
                <button className="btn btn-ghost text-3xl">
                  <FaUserCircle />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllUsers;
