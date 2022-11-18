import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import * as React from 'react';
import { useState } from 'react';

import CheckoutForm from '@/components/CheckoutForm/CheckoutForm';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

const stripePromise = loadStripe('pk_test_51LwVlYGbjwd92QzUzw9xaoeuHLtaLubqLvD3V9o80WOF7LsEvKm5e7mQzDZSZG8vqGi4ZQFOxLPfCaF00QjgqdoP00JTX13Ri9');


export default function PaymentGateway() {
  const BASE_URL = 'http://localhost:3333'
  const [isLoading, setIsLoading] = useState(true);
  const [clientSecret, setClientSecret] = useState<string>();

  async function getResponse() {
    if (isLoading) {
      const response = await fetch(
        `${BASE_URL}/stripe/create-payment-intent`,
        { method: 'POST' }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setClientSecret(data.clientSecret);
      setIsLoading(false);
    }

  }


  getResponse();


  const options = {
    clientSecret,
  };

  const heroJSX = (
    <>
      <Heading>Payments</Heading>
    </>
  );

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}>
        <Elements stripe={stripePromise} options={options}>
          <p>Payment</p>
          {clientSecret && clientSecret.length > 0 && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          )}
        </Elements>

      </LayoutDefault>
    </>
  );
}
