'use client';
import React from 'react';
import useSWR from 'swr';
import { usePost } from '@/context/blogContext';
import withAuth from '@/components/common/withAuth';

const Dashboard = () => {
  // const data = usePost();

  return <div>Dashboard</div>;
};

export default withAuth(Dashboard);
