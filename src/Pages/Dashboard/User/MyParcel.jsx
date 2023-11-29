import useParcel from "../../../Hooks/useParcel";
import MyParcelRow from "./MyParcelRow";

const MyParcel = () => {
  const [booking, refetch] = useParcel();

  return (
    <div>
      <div className=" text-white mt-12">
        <h3 className="text-5xl p-4 w-96 font-bold border-2 text-white mx-auto text-center">
          My Parcel ({booking?.length})
        </h3>
      </div>
      <table className="md:w-[1050px] text-xs mt-8 mx-auto  text-white border-4">
        <thead className="bg-white text-black">
          <tr className="">
            <th className="p-3">Parcel Type</th>
            <th className="p-3">Booking Date</th>
            <th className="p-3">Requested Date</th>
            <th className="p-3">Approximate Date</th>
            <th className="p-3 ">Delivery Men ID</th>
            <th className="p-3">Status</th>
            <th className="p-3">Update</th>
            <th className="p-3">Cancel</th>
            <th className="p-3">Pay</th>
            <th className="p-3">Review</th>
          </tr>
        </thead>
        {booking?.map((parcel) => (
          <MyParcelRow key={parcel?._id} refetch={refetch} parcel={parcel} />
        ))}
      </table>
    </div>
  );
};

export default MyParcel;
