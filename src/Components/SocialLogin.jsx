import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = useAxiosPublic();
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          photo: result.user?.photoURL,
          userType: "user",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Great job!",
              text: "Sign-in successful.",
              imageUrl:
                "https://images.pexels.com/photos/5898313/pexels-photo-5898313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Welcome image",
            });

            navigate(from, { replace: true });
          }
        });
      })
      .catch((err) => console.error(err.message));
  };
  return (
    <div>
      <div className="">
        <p className="text-center text-black py-5">Or Sign In with</p>
        <div
          onClick={handleGoogleLogin}
          className="flex justify-center btn btn-success items-center   
				"
        >
          SignIn with
          <span className="  text-3xl">
            <FcGoogle />
          </span>
          google
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
