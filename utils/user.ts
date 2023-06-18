import prisma from '@/db/mongo';
import { client } from '@/utils/client';

interface IUSer {
  bio: String;
  occupation: String;
  profilePic: String;
  links: {
    link: string;
    type: string;
  }[];
}

export async function createNewUser({
  bio,
  occupation,
  profilePic,
  links,
}: IUSer) {
  const res = client('/api/profile', {
    method: 'POST',
    data: {
      bio,
      occupation,
      profilePic,
      links,
    },
  });

  return res;
}
