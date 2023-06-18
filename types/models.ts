import { Prisma } from '@prisma/client';

const blogData = Prisma.validator<Prisma.PostArgs>()({
  include: {
    author: true,
  },
});

export type BlogType = Prisma.PostGetPayload<typeof blogData>;
