import prisma from '@/db/mongo';
import { notFound } from 'next/navigation';

export const topPosts = async (num: number) => {
  const res = await prisma.post.findMany({
    include: {
      author: true,
      View: true,
    },
    orderBy: {
      View: {
        count: 'desc',
      },
    },
    take: num,
  });

  if (!res) {
    notFound();
  }

  return res;
};
