import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { StripePaymentForm } from "./StripePaymentForm";
const stripeKey = process.env.NEXT_PUBLIC_STRIPEKEY;
const stripePromise = loadStripe(stripeKey);

const PaymentForm = ({ handleStepChange, totalCost }) => {
  return (
    <Elements stripe={stripePromise}>
      <StripePaymentForm handleStepChange={handleStepChange} totalCost={totalCost} />
    </Elements>
  );
};

export default PaymentForm;
