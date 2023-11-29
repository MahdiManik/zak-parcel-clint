import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AllParcelRow from "./AllParcelRow";

const AllParcel = () => {
  const axiosPublic = useAxiosPublic();
  const { data: parcel = [], refetch } = useQuery({
    queryKey: ["parcel"],
    queryFn: async () => {
      const res = await axiosPublic.get(`bookings`);
      //  console.log("parcel", res.data);
      refetch();
      return res.data;
    },
  });

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
            <AllParcelRow key={item?._id} item={item} refetch={refetch} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllParcel;
