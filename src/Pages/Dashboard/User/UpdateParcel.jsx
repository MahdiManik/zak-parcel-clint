import { useForm } from "react-hook-form";
import { Title } from "../../../Shared/Title";
//import useAuth from "../../../Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const UpdateParcel = () => {
  //  const { user } = useAuth();
  const data = useLoaderData();
  const {
    email,
    name,
    parcelDeliveryAddress,
    phone,
    receiverName,
    requestedDeliveryDate,
    parcelType,
    receiverPhoneNumber,
  } = data || {};
  console.log("data", data);
  //  const {
  //    phone,
  //    parcelType,
  //    receiverName,
  //    receiverPhoneNumber,
  //    parcelDeliveryAddress,
  //    requestedDeliveryDate,
  //  } = data || {};

  const { register } = useForm();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [errors, setErrors] = useState({});

  const [parcelWeight, setParcelWeight] = useState("");
  const [price, setPrice] = useState("");

  const calculatePrice = (event) => {
    const weight = Number(event.target.value);
    let calculatedPrice;

    if (weight <= 1) {
      calculatedPrice = 50;
    } else if (weight <= 2) {
      calculatedPrice = 100;
    } else {
      calculatedPrice = 150;
    }
    setPrice(calculatedPrice);
    setParcelWeight(weight);
  };

  const validateLatitude = (value) => {
    const lat = Number(value);
    if (isNaN(lat) || lat < -90 || lat > 90) {
      return "Invalid latitude. Must be between -90 and 90.";
    }
    return "";
  };

  const validateLongitude = (value) => {
    const lon = Number(value);
    if (isNaN(lon) || lon < -180 || lon > 180) {
      return "Invalid longitude. Must be between -180 and 180.";
    }
    return "";
  };

  const handleLatitudeChange = (event) => {
    const value = event.target.value;
    setLatitude(value);
    setErrors({ ...errors, latitude: validateLatitude(value) });
  };

  const handleLongitudeChange = (event) => {
    const value = event.target.value;
    setLongitude(value);
    setErrors({ ...errors, longitude: validateLongitude(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updated");
  };

  return (
    <div>
      <div className="bg-gray-200 p-12 mb-20">
        <h1 className="text-4xl font-semibold text-gray-700 text-center mb-8">
          <Title heading={"This form is for updating your booking parcel"} />
        </h1>
        <p className="text-gray-600 text-center mb-8 w-2/3 mx-auto"></p>
        <form className="rounded-lg p-8" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 px-4 mb-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="name"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="name"
                name="name"
                readOnly
                type="text"
                defaultValue={name}
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mb-4 ">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="email"
                name="email"
                readOnly
                defaultValue={email}
                type="text"
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="number"
              >
                Phone Number
              </label>
              <input
                {...register("phone", { required: true })}
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="phone"
                name="phone"
                type="number"
                placeholder="Phone Number"
                defaultValue={phone}
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="subject"
              >
                Parcel Type
              </label>
              <input
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="parcelType"
                name="parcelType"
                type="text"
                placeholder="Parcel Type"
                defaultValue={parcelType}
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="subject"
              >
                Receiver Name
              </label>
              <input
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="receiverName"
                name="receiverName"
                type="text"
                defaultValue={receiverName}
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-4 block"
                htmlFor="subject"
              >
                Receiver Phone Number
              </label>
              <input
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="receiverPhoneNumber"
                name="receiverPhoneNumber"
                type="text"
                defaultValue={receiverPhoneNumber}
                placeholder=""
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="subject"
              >
                Parcel Delivery Address
              </label>
              <input
                {...register("parcelDeliveryAddress", { required: true })}
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="parcelDeliveryAddress"
                name="parcelDeliveryAddress"
                type="text"
                defaultValue={parcelDeliveryAddress}
                placeholder=""
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="latitude"
              >
                Delivery Address Latitude
              </label>
              <input
                className={`block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500 ${
                  errors.latitude ? "border-red-500" : ""
                }`}
                id="latitude"
                defaultValue={latitude}
                name="latitude"
                type="number"
                placeholder="Latitude"
                //value={latitude}
                onChange={handleLatitudeChange}
                {...register("latitude", { required: true })}
              />
              {errors.latitude && (
                <p className="text-red-500">{errors.latitude}</p>
              )}
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="longitude"
              >
                Delivery Address Longitude
              </label>
              <input
                className={`block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500 ${
                  errors.longitude ? "border-red-500" : ""
                }`}
                id="longitude"
                name="longitude"
                defaultValue={longitude}
                type="number"
                placeholder="Longitude"
                //value={longitude}
                onChange={handleLongitudeChange}
                {...register("longitude", { required: true })}
              />
              {errors.longitude && (
                <p className="text-red-500">{errors.longitude}</p>
              )}
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="subject"
              >
                Requested Delivery Date
              </label>
              <input
                {...register("requestedDeliveryDate", { required: true })}
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="requestedDeliveryDate"
                name="requestedDeliveryDate"
                defaultValue={requestedDeliveryDate}
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="parcelWeight"
              >
                Parcel Weight
              </label>
              <input
                {...register("parcelWeight", { required: true })}
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="parcelWeight"
                name="parcelWeight"
                defaultValue={parcelWeight}
                type="number"
                placeholder=""
                onChange={calculatePrice}
                //value={parcelWeight}
              />
            </div>

            <div className="w-full md:w-1/2 px-4 mt-4">
              <label
                className="text-gray-700 font-semibold mb-2 block"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="block w-full border rounded-md py-2 px-3 text-gray-700 placeholder-gray-400 focus:border-2 focus:border-orange-500"
                id="price"
                name="price"
                type="number"
                //defaultValue={price}
                placeholder=""
                {...register("price", { required: true })}
                value={price}
                readOnly
              />
            </div>
          </div>

          <div className=" mt-8">
            <button
              className="bg-orange-500 text-white py-3 px-8 rounded-lg w-full "
              disabled={!!errors.latitude || !!errors.longitude}
            >
              <input className="w-full" type="submit" value="Book Now" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateParcel;
