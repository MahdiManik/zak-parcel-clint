import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Container from "../Shared/Container";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../Components/SocialLogin";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photoURL,
            userType: data.userType,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 2500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>ZAK Parcel | Sign Up</title>
      </Helmet>
      <Container>
        <Link to={"/"} className="btn btn-primary text-white">
          Go home
        </Link>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center lg:text-left">
              <img src="{registerImg}" alt="" />
            </div>
            <div className="card flex-shrink-0 mb-6 w-full max-w-lg shadow-2xl bg-base-100">
              <h1 className="text-3xl p-6 mt-2 font-bold">Sign up now!</h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body w-[460px]"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Type</span>
                  </label>
                  <select
                    type="text"
                    placeholder="user type"
                    name="userType"
                    className="input input-bordered"
                    {...register("userType", { required: true })}
                  >
                    <option value="User">User</option>
                    <option value="DeliveryMen">DeliveryMen</option>
                  </select>

                  {errors.userType && (
                    <span className="text-red-600">userType is required</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <p className="mt-4">
                  <small>
                    Already have an account
                    <Link className="btn btn-primary btn-sm ml-3" to="/login">
                      Login
                    </Link>
                  </small>
                </p>
              </form>
              <SocialLogin />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
