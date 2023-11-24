import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-seven-self.vercel.app",
  //withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
