import prisma from '@/db/mongo';

export async function getBlogs() {
  try {
    const res = await prisma.post.findMany({
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
            profilePic: true,
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
