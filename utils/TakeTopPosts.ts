import prisma from '@/db/mongo';

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

  return res;
};
