import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { useAuthContext } from '@/hooks/useAuthContext';

import Button from '@/components/Button/Button';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

import { IUser } from '@/interfaces/User';

export default function CustomerDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuthContext();
  const [data, setData] = useState<IUser>();

  useEffect(() => {
    const fetchUser = async () => {
      if (!user || !id) {
        return;
      }
      const response = await fetch(`http://localhost:3333/users/${id}`, {
        method: 'GET',
        headers: { Authorization: `Bearer ${user.access_token}` },
      });
      setData(await response.json());
    };
    fetchUser();
  }, [user, id]);

  return (
    <LayoutDefault hideHero={true}>
      <div className='container flex max-w-5xl columns-2 justify-center gap-10'>
        {/* First Column */}
        <div className='w-1/2 p-4'>
          <p className='font-heading text-3xl'>Journalist Profile</p>
          <div
            className={`badge w-full rounded-md border border-black p-4 ${
              data?.role == 'BRAND'
                ? 'bg-brand-yellow'
                : 'bg-brand-light-purple'
            }`}
          >
            <p>{data?.first_name + ' ' + data?.last_name}</p>
          </div>
          {data?.Profile && (
            <>
              <pre>{JSON.stringify(data?.Profile)}</pre>
            </>
          )}
        </div>

        {/* Second Column */}
        <div className='w-1/2 p-4'>
          <div className='mb-10'>
            {!data?.is_approved && (
              <>
                <p className='font-heading text-xl'>Approve user?</p>
                <Button color='green' size='sm' variant='outline'>
                  Approve
                </Button>
              </>
            )}
          </div>
          <div className='mb-10'>
            <p className='font-heading text-xl'>Select New Matches</p>
            <textarea></textarea>
            <Button size='sm' color='green' variant='outline'>
              Submit Matches
            </Button>
          </div>
          <div className='mb-10'>
            <p className='font-heading text-xl'>Delete Existing Matches</p>
            <textarea></textarea>
            <Button size='sm' color='green' variant='outline'>
              Remove Matches
            </Button>
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
}
