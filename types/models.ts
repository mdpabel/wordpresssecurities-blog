import { Prisma } from '@prisma/client';

const blogData = Prisma.validator<Prisma.PostArgs>()({
  include: {
    author: {
      select: {
        name: true,
        email: true,
        id: true,
      },
    },
  },
});

export type BlogType = Prisma.PostGetPayload<typeof blogData>;
