/* eslint-disable */
import { useForm } from 'react-hook-form';
import React from 'react';
import styles from './AssesmentForm.module.css';
import Button from '@/components/Button/Button';

export interface AssesmentFormProps {}

export default function AssesmentForm(props: AssesmentFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.AssesmentFormComponent}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='my-4 flex flex-col'>
          <label className='my-2'>
            What area of the market does your brand sit in ?
          </label>
          <input
            type='text'
            placeholder='affliate_url'
            {...register('affliate_url')}
          />
        </div>

        <div className='my-4 flex flex-col'>
          <label className='my-2'>
            What time of day would you prefer to take your DeskSide meetings?
          </label>
          <input
            type='text'
            placeholder='preferred_datetime'
            {...register('preferred_datetime')}
          />
        </div>
        <div className='my-4 flex flex-col'>
          <label className='my-2'>
            What medium is your priority to be published in ?
          </label>
          <input
            type='text'
            placeholder='preferred_medium'
            {...register('preferred_medium')}
          />
        </div>
        <div className='my-4 flex flex-col'>
          <label className='my-2'>
            How many press placements per quarter would you consider to be a
            success?
          </label>
          <input
            type='text'
            placeholder='quarterly_goal'
            {...register('quarterly_goal')}
          />
        </div>
        {/* <input className='flex flex-col my-4' type='submit' /> */}
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}
