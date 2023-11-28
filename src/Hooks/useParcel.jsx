import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useParcel = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: booking = [], refetch } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axiosSecure.get(`bookings/${user?.email}`);
    //  console.log(res.data);
      return res.data;
    },
  });
  return [booking, refetch];
};

export default useParcel;
