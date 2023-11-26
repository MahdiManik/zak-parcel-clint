import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="text-white flex flex-col justify-center items-center text-center gap-8">
        <h1 className="font-bold text-2xl my-10 ">Your Profile</h1>
        <div className="flex flex-col justify-center items-center text-center gap-8">
          {user && (
            <img
              width="150"
              style={{
                borderRadius: "50%",
                border: "3px solid #331a15",
                color: "white",
              }}
              src={user?.photoURL}
              alt=""
            />
          )}
          <div className="py-3 space-y-6 text-5xl">
            {user.displayName && (
              <h4 className="fw-bold" style={{ fontFamily: "Rancho" }}>
                Name: {user.displayName}
              </h4>
            )}
            {user.email && <h5>Email: {user.email}</h5>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
