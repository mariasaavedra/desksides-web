import * as React from 'react';

import AssesmentForm from '@/components/AssesmentForm/AssesmentForm';
import Heading from '@/components/Heading/Heading';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';


export default function BrandProfile() {

  type BrandProfileForm = {
    affliate_url: string;
    preferred_datetime: string;
    preferred_medium: string;
    quarterly_goal: number;
    stories_per_month: number;
    years_of_exp: number;
    user_id: number;
    preferred_time: string;
  };

  const heroJSX = (
    <>
      <Heading>Brand Profile</Heading>
      <p className='text-white'>
        Tell us about your business, so we can find the right people to tell
        everyone else about it!
      </p>
    </>
  );


  const onSubmit = (data: any) => console.log(data);


  return (
    <>
      <LayoutDefault justify='left' heroJSX={heroJSX}>
        <AssesmentForm></AssesmentForm>
      </LayoutDefault>
    </>
  );
}
