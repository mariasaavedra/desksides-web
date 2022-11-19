import { useRouter } from 'next/router'
import * as React from 'react';

import Button from '@/components/Button/Button';
import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function CustomerDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <LayoutDefault hideHero={true}>
      <div className="container flex justify-center columns-2 max-w-5xl">
        {/* First Column */}
        <div className='w-1/2'>
          <p className="text-3xl font-heading">Journalist Profile</p>
          <div className="badge bg-brand-yellow p-4 rounded-lg w-full border border-black">
            <p>Benjamin Smith</p>
          </div>
        </div>

        {/* Second Column */}
        <div className='w-1/2'>
          <div>
            <p className="text-xl font-heading">Approve user?</p>
            <Button color='purple' size='sm' variant='outline'>Approve</Button>
          </div>
          <div>
            <p className="text-xl font-heading">Select New Match(es)</p>
            <textarea></textarea>
            <Button size='sm' color='red' variant='outline'>Submit Match(es)</Button>
          </div>
          <div>
            <p className="text-xl font-heading">Delete Existing Match(es)</p>
            <textarea></textarea>
            <Button size='sm' variant='outline'>Remove Match(es)</Button>
          </div>
        </div>
      </div>
    </LayoutDefault >
  );
}
