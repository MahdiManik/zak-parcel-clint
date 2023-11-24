import { Link, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import Container from "../Shared/Container";
import SocialLogin from "../Components/SocialLogin";
import useAuth from "../Hooks/useAuth";
import { Title } from "../Shared/Title";

const Login = () => {
  const { loginWithEmail } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginWithEmail(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
      form.reset();
    });
  };

  return (
    <>
      <Helmet>
        <title>ZAK Parcel | Sign In</title>
      </Helmet>
      <Container>
        <Link to={"/"} className="btn btn-primary text-white ">
          Go home
        </Link>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-6">
            <div className="text-center lg:text-left">
              <img className="w-5/6" src="{loginImg}" alt="" />
            </div>
            <div className="card flex-shrink-0  w-full max-w-md shadow-2xl bg-base-100">
              <Title heading={"Login"} />
              <form onSubmit={handleLogin} className="card-body w-96">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-black">
                      Email
                    </span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="input  input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold ">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Your password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    className="py-1 px-5 btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <SocialLogin />
                <p className="text-center pt-5">
                  New in Our Site?{" "}
                  <Link className="btn btn-success btn-sm" to={"/register"}>
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
