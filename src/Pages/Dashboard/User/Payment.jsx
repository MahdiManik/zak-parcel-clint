import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Shared/SectionTitle";
import CheckOut from "./CheckOut";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK);

const Payment = () => {
  const singleParcel = useLoaderData();

  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };
  return (
    <div>
      <SectionTitle
        heading={"Please Payment for a parcel booking"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise} options={options}>
          {singleParcel.map((item) => (
            <CheckOut key={item?._id} item={item}></CheckOut>
          ))}
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
