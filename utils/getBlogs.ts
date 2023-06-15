import prisma from '@/db/mongo';

export async function getBlogs() {
  try {
    const res = await prisma.post.findMany({
      include: {
        author: {
          select: {
            name: true,
            email: true,
            id: true,
          },
        },
      },
      orderBy: {
        createAt: 'desc',
      },
      take: 5,
    });

    return res;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
