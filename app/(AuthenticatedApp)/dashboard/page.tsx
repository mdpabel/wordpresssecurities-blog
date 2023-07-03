'use client';
import React from 'react';
import useSWR from 'swr';
import { usePost } from '@/context/blogContext';

const Dashboard = () => {
  const data = usePost();

  console.log(data);

  return <div>Dashboard</div>;
};

export default Dashboard;
