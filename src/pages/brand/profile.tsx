import * as React from 'react';
import { useForm } from 'react-hook-form';

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: unknown) => {
    console.log('on submit', data);
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

  return (
    <>
      <LayoutDefault heroJSX={heroJSX}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='block'>
            <label>What area of the market does your brand sit in ?</label>
            <input
              type='text'
              placeholder='affliate_url'
              {...register('affliate_url', {})}
            />
          </div>

          <div className='block'>
            <label>
              What time of day would you prefer to take your DeskSide meetings?
            </label>
            <input
              type='text'
              placeholder='preferred_datetime'
              {...register('preferred_datetime')}
            />
          </div>
          <div className='block'>
            <label>What medium is your priority to be published in ?</label>
            <input
              type='text'
              placeholder='preferred_medium'
              {...register('preferred_medium')}
            />
          </div>
          <div className='block'>
            <label>
              How many press placements per quarter would you consider to be a
              success?
            </label>
            <input
              type='text'
              placeholder='quarterly_goal'
              {...register('quarterly_goal')}
            />
          </div>
          <div className='block'></div>
          <div className='block'></div>

          <input className='block' type='submit' />
        </form>
      </LayoutDefault>
    </>
  );
}
