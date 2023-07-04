import { useState, useEffect } from 'react';
import { Link, User } from '@prisma/client';

type Data = User & {
  links: Link[];
};

export const useUserByClerkId = () => {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch('/api/profile')
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        const user = data?.data as Data;
        setData(user);
      });
  }, []);

  return data;
};
