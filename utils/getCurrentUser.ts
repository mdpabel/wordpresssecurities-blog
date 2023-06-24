import { cache } from 'react';
import prisma from '@/db/mongo';
import { currentUser } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export const getCurrentUser = cache(async () => {
  const user = await currentUser();
  const res = await prisma.user.findFirst({
    where: {
      clerkUserId: user?.id,
    },
  });

  if (!res) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 401,
      }
    );
  }

  return res;
});
