import { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
//import useParcel from "../../../Hooks/useParcel";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CheckOut = ({ item }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  //  const [booking, refetch] = useParcel();

  console.log(item?.price);
  const totalPrice = item?.price;

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecrets);
          setClientSecret(res.data.clientSecrets);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      return;
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
    // now save the payment in the database
    //const payment = {
    //  email: user.email,
    //  price: totalPrice,
    //  transactionId: paymentIntent.id,
    //  date: new Date(), // utc date convert. use moment js to
    //  cartIds: booking.map((item) => item._id),
    //  menuItemIds: booking.map((item) => item.menuId),
    //  status: "pending",
    //};
    const res = await axiosSecure.post("/payments");
    console.log("payment saved", res.data);

    if (res.data?.paymentResult?.insertedId) {
      Swal.fire({
        icon: "success",
        position: "top",
        title: "payment successful",
      });
    }
  };

  return (
    <div className="bg-white py-12 px-4">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#00000",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        ></CardElement>

        <div className="flex justify-center items-center">
          <button
            className="btn btn-sm text-white btn-ghost w-28 bg-black mt-8"
            type="submit"
            disabled={!stripe || !elements}
          >
            Pay
          </button>
        </div>
        {transactionId && (
          <p className="text-black mt-10">
            Your transaction id: {transactionId}
          </p>
        )}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
};

export default CheckOut;
