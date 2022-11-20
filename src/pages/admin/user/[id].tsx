import { useRouter } from 'next/router'
import * as React from 'react';
import { useEffect, useState } from 'react';

import { useAuthContext } from '@/hooks/useAuthContext';

import Button from '@/components/Button/Button';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

import { IUser } from '@/interfaces/User';

export default function CustomerDetail() {
  const router = useRouter()
  const { id } = router.query;
  const { user } = useAuthContext();
  const [data, setData] = useState<IUser>();

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) {
        return;
      }
      const response = await fetch(`http://localhost:3333/users/${id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${user.access_token}` },
      });
      setData(await response.json());
    }
    fetchUser();
  }, [user, id])


  return (
    <LayoutDefault hideHero={true}>
      <div className="container gap-10 flex justify-center columns-2 max-w-5xl">
        {/* First Column */}
        <div className='w-1/2 p-4'>
          <p className="text-3xl font-heading">Journalist Profile</p>
          <div className="badge bg-brand-yellow p-4 rounded-md w-full border border-black">
            <p>{data?.first_name + ' ' + data?.last_name}</p>
          </div>
        </div>

        {/* Second Column */}
        <div className='w-1/2 p-4'>
          <div className='mb-10'>
            <p className="text-xl font-heading">Approve user?</p>
            <Button color='green' size='sm' variant='outline'>Approve</Button>
          </div>
          <div className='mb-10'>
            <p className="text-xl font-heading">Select New Matches</p>
            <textarea></textarea>
            <Button size='sm' color='green' variant='outline'>Submit Matches</Button>
          </div>
          <div className='mb-10'>
            <p className="text-xl font-heading">Delete Existing Matches</p>
            <textarea></textarea>
            <Button size='sm' color='green' variant='outline'>Remove Matches</Button>
          </div>
        </div>
      </div>
    </LayoutDefault >
  );
}
