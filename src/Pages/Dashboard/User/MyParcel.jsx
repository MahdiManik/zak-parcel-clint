import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: booking = [], refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <table className="min-w-full text-xs">
		
        <thead className="dark:bg-gray-700">
          <tr className="text-left">
            <th className="p-3">Invoice #</th>
            <th className="p-3">Client</th>
            <th className="p-3">Issued</th>
            <th className="p-3">Due</th>
            <th className="p-3 text-right">Amount</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
            <td className="p-3">
              <p>97412378923</p>
            </td>
            <td className="p-3">
              <p>Microsoft Corporation</p>
            </td>
            <td className="p-3">
              <p>14 Jan 2022</p>
              <p className="dark:text-gray-400">Friday</p>
            </td>
            <td className="p-3">
              <p>01 Feb 2022</p>
              <p className="dark:text-gray-400">Tuesday</p>
            </td>
            <td className="p-3 text-right">
              <p>$15,792</p>
            </td>
            <td className="p-3 text-right">
              <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                <span>Pending</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyParcel;
