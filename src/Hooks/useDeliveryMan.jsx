import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useDeliveryMan = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: isDeliveryMan, isPending: isDeliveryManLoading } = useQuery({
    queryKey: [user?.email, "isDeliveryMan"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`users/delivery-man/${user?.email}`);
      console.log(res.data);
      return res.data?.deliveryMan;
    },
  });
  return [isDeliveryMan, isDeliveryManLoading];
};

export default useDeliveryMan;
