import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Shared/SectionTitle";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY_PK);

const Payment = () => {
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
        subHeading={"-----payment get way-----"}
        heading={"Please Payment"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise} options={options}>
          <CheckOut></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
