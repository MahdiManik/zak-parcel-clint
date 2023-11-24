import axios from "axios";
import useAuth from "../UseAuth/UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-seven-self.vercel.app",
  //  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // axiosSecure.interceptors.request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  //  axios.interceptors.response
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      //  console.log("status error in interceptors response", status);
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
