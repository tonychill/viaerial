import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import s from "./payments.module.css";

const StripePaymentForm = ({ handleStepChange, totalCost }) => {
  const [status, setStatus] = useState("");
  const [succeeded, setSucceeded] = useState(null);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  // const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const cardOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <form id="payment-form" className={s.form} onSubmit={handleSubmitPayment}>
      <CardElement id="card-element" options={cardOptions} onChange={handleChange} />
      <button disabled={processing || disabled || succeeded} className={s.button} id="submit">
        <span id="button-text">{buttonTextToRender(status)}</span>
        {/* <span id="button-text">{processing ? <div className={s.spinner} id="spinner"></div> : "Pay"}</span> */}
      </button>
      {/* {error && (
          <div className={s.card_error} role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
      {/* <p className={succeeded ? `${s.result_message}` : `${s.result_message} ${s.hidden}`}>Your in!!!</p> */}
    </form>
  );
  function handleChange(ev) {
    setDisabled(ev.empty);
    setError(ev.error ? ev.error.message : "");
  }

  function handlePaymentSuccess() {
    //The follwoig three functions and their associated state are no longer needed. Their absence still needs to be tested.
    setError(null);
    setProcessing(false);
    setSucceeded(true);
    setStatus("succeeded");
    handleStepChange(2);
    localStorage.removeItem("stripeSecret");
    localStorage.signUpStep = 2;
    //Burst the confetti!!!
  }

  function buttonTextToRender(status) {
    switch (status) {
      case "processing":
        return <div className={s.spinner} id="spinner"></div>;
      case "succeeded":
        return <p className={succeeded ? `${s.result_message}` : `${s.result_message} ${s.hidden}`}>Your in!!!</p>;
      case "error":
        return "Sorry, there seems to be an issue. 😔";
      case "card_declined":
        return "Sorry, looks like your card was declined. 😔";
      default:
        return "Pay";
    }
  }
  async function createPaymentIntent(totalCost) {
    console.log("getting payment intent", totalCost);
    /*FIXME:
     * Pulling this travelers object from local storage will present a bug
     * when a different traveler decides to sign up on someone's computer
     * as their data will still be saved in local storaage.
     */
    const { id, email, name } = JSON.parse(localStorage.traveler);
    const currency = "usd";
    const intentParams = {
      totalCost: Math.floor(totalCost * 100), //In rare cases where totalCost returns in as a decimal Math.floor() solves this issue as Stripe only accepts integers.
      currency,
      email,
      name,
      traveler_id: id, //TODO: Change to id here as well on the payment server.
    };
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_PAYMENT_INTENT_SERVER, intentParams);
      console.log("Payment intent respone", res);
      return res.data.payment.client_secret;
      // if (res.data.payment.client_secret) {
      //   storeClientSecret(res.data.payment.client_secret);
      // } else {
      //   throw new Error("A client secret from the payment server was not returned. ");
      // }
    } catch (error) {
      console.log("error from creating payment intent: ", error);
      return error;
    }
  }

  async function handleSubmitPayment(event) {
    console.log("processing");
    event.preventDefault();
    setStatus("processing");
    setProcessing(true);
    try {
      if (!stripe || !elements) {
        throw new Error(" Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.");
      }

      const clientSecret = await createPaymentIntent(totalCost);
      const paymentConfirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // name: cogName,
            // email,
            email: "testing@stripe.com",
            name: "cogName",
          },
        },
      });

      if (paymentConfirmation.error) {
        console.log(paymentConfirmation);
      } else {
        handlePaymentSuccess();
      }
    } catch (err) {
      console.log(err);
      setStatus("error");
      setError(`Payment failed: ${err}`);
      setProcessing(false);
    }
  }
};
export { StripePaymentForm };
