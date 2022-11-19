import Table from 'rc-table';
import * as React from 'react';

import LayoutDefault from '@/components/LayoutDefault/LayoutDefault';

export default function AdminIndex() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
      width: 50,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: 50,
    },
    {
      title: 'Date Joined',
      dataIndex: 'date_joined',
      key: 'date_joined',
      width: 150,
    },
    {
      title: 'Market',
      dataIndex: 'market',
      key: 'market',
      width: 100,
    },
    {
      title: 'Approved',
      dataIndex: 'approved',
      key: 'approved',
      width: 50,
    },
    {
      title: 'Detail',
      dataIndex: '',
      key: 'operations',
      render: () => <a href="#">Detail</a>,
    },
  ];

  const data = [
    { name: 'Jack Sparrow', city: 'Overland park', state: 'KS', role: 'Brand', date_joined: new Date().toDateString(), market: 'Beauty', approved: 'yes', key: '1' },
    { name: 'Jack Sparrow', city: 'Overland park', state: 'KS', role: 'Brand', date_joined: new Date().toDateString(), market: 'Beauty', approved: 'yes', key: '1' },
    { name: 'Jack Sparrow', city: 'Overland park', state: 'KS', role: 'Brand', date_joined: new Date().toDateString(), market: 'Beauty', approved: 'yes', key: '1' },
    { name: 'Jack Sparrow', city: 'Overland park', state: 'KS', role: 'Brand', date_joined: new Date().toDateString(), market: 'Beauty', approved: 'yes', key: '1' },
    { name: 'Jack Sparrow', city: 'Overland park', state: 'KS', role: 'Brand', date_joined: new Date().toDateString(), market: 'Beauty', approved: 'yes', key: '1' },
    { name: 'Jack Sparrow', city: 'Overland park', state: 'KS', role: 'Brand', date_joined: new Date().toDateString(), market: 'Beauty', approved: 'yes', key: '1' },
    { name: 'Jack Sparrow', city: 'Overland park', state: 'KS', role: 'Brand', date_joined: new Date().toDateString(), market: 'Beauty', approved: 'yes', key: '1' },
  ];


  return (
    <LayoutDefault hideHero={true}>
      <Table columns={columns} data={data} />
    </LayoutDefault >
  );
}
