import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import * as React from 'react';
import { useEffect, useState } from 'react';

import CheckoutForm from '@/components/CheckoutForm/CheckoutForm';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

const stripePromise = loadStripe(
  'pk_test_51LwVlYGbjwd92QzUzw9xaoeuHLtaLubqLvD3V9o80WOF7LsEvKm5e7mQzDZSZG8vqGi4ZQFOxLPfCaF00QjgqdoP00JTX13Ri9'
);

export default function PaymentGateway() {
  const BASE_URL = 'http://localhost:3333';
  const [isLoading, setIsLoading] = useState(true);
  const [clientSecret, setClientSecret] = useState<string>();

  useEffect(() => {
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
        setClientSecret(data.clientSecret);
        setIsLoading(false);
      }
    }
    getResponse();
  }, [isLoading]);

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
        <div className='mx-auto flex w-[800px] justify-between'>
          <div className='w-max px-4'>
            <p className='font-heading text-xl'>Packages</p>
            <div className='w-[100%] rounded-xl border bg-white p-4'>
              $2400/ Annually
            </div>
          </div>
          <div>
            <Elements stripe={stripePromise} options={options}>
              {clientSecret && clientSecret.length > 0 && (
                <Elements stripe={stripePromise} options={options}>
                  <CheckoutForm />
                </Elements>
              )}
            </Elements>
          </div>
        </div>
      </LayoutDefault>
    </>
  );
}
