import SectionTitle from "../../Shared/SectionTitle";
import "./banner.css";
const Banner = () => {
  return (
    <div className="mb-20  ">
      <div className="featured-item bg-fixed  h-[700px]">
        <div className=" h-[700px] bg-opacity-20">
          <div className="flex justify-center items-center h-[700px] bg-slate-900 bg-opacity-60 pt-6 pb-20 px-36 text-white rounded-b-lg overflow-hidden">
            <div className="">
              <SectionTitle
                subHeading={
                  "Book parcel deliveries in just a few clicks, Track your parcels in real time, and Assign delivery personnel efficiently"
                }
                heading={"Experience Seamless Parcel Management"}
              ></SectionTitle>
              <div className="w-full mx-auto">
                <input
                  type="text"
                  placeholder="Type here for your need"
                  className="input input-bordered input-primary w-full max-w-xl mr-2 text-black"
                />
                <button className="btn-outline btn-ghost mt-3 text-center  text-white btn rounded">
                  Search it
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
