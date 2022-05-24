import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1XPtAKPn8xk6KREJGFJCE114R5OBzhaRgucW30fy9HBpfBOLdnUXAsjdf3qP9gQ85h67NUpQzGJcg2C8E5Q2au009d7jkPud"
);

const Payment = () => {
  const { id } = useParams();
  const [payments, setPayments] = useState([]);
  const url = `http://localhost:5000/order/${id}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, [url]);

  return (
    <div>
      <h2 className="text-xl my-5">Welcome to payment</h2>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-8 mx-auto">
        <div class="card-body">
          <h2 class="card-title  bg-sky-100 p-3 rounded-lg mb-3">
            {" "}
            Pay for : {payments.tool}
          </h2>
          <p className="text-cyan-500 font-mono">
            Hello, {payments.customerName}
          </p>
          <p className="text-xl font-mono text-lime-500">
            Thank's for your order ❣️
          </p>
          <p>
            Please Pay: <span className="font-mono"> ${payments.price}</span>
          </p>
        </div>
      </div>
      <div class="card flex-shrink-0 mx-auto w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm payments={payments} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
