import prisma from '@/db/mongo';

export async function getBlogs() {
  try {
    const res = await prisma.post.findMany({
      include: {
        author: true,
      },
      orderBy: {
        createAt: 'desc',
      },
    });

    return res;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
