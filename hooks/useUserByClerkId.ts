import { useState, useEffect } from 'react';
import { User } from '@prisma/client';

type Data = {
  success: boolean;
  data: User;
};

export const useUserByClerkId = () => {
  const [data, setData] = useState<User>();

  useEffect(() => {
    fetch('/api/profile')
      .then((res) => {
        return res.json();
      })
      .then((data: Data) => {
        const user = data?.data as User;
        setData(user);
      });
  });

  return data;
};
