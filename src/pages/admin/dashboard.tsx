import Link from 'next/link';
import Table from 'rc-table';
import * as React from 'react';
import { useEffect, useState } from 'react';

import { useAuthContext } from '@/hooks/useAuthContext';

import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

const getFormattedDate = (date: Date) => {
  return new Date(date).getMonth() + '/' + new Date(date).getDay() + '/' + new Date(date).getFullYear()
}

export default function AdminIndex() {
  const { user } = useAuthContext();
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
      width: 150,
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
      width: 150,
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      width: 200,
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      width: 100,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 100,
      render: (value: string) => <span className='capitalize'>{value.toLowerCase()}</span>
    },
    {
      title: 'Date Joined',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 150,
      render: (value) => getFormattedDate(value)
    },
    {
      title: 'Market',
      dataIndex: 'market',
      key: 'market',
      width: 100,
    },
    {
      title: 'Approved',
      dataIndex: 'is_approved',
      key: 'is_approved',
      width: 50,
      render: (value) => {
        return (<>{value ? <><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        </> : <>-</>} </>)
      }
    },
    {
      title: 'Detail',
      dataIndex: '',
      key: 'operations',
      render: (value: { id: any; }, row: any, index: any) => <Link href={`/admin/user/${value.id}`}>Detail</Link>,
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log(user, "user")
      if (!user) {
        return;
      }
      const response = await fetch('http://localhost:3333/users', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${user.access_token}` },
      });
      const users = await response.json();
      setData(users);
      console.log("data", data);
    }
    fetchUsers();
  }, [user])


  return (
    <LayoutDefault hideHero={true}>
      <Table columns={columns} data={data} />
    </LayoutDefault >
  );
}
