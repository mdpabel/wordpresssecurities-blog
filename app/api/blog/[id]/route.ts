import prisma from '@/db/mongo';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, context: any) => {
  const { params } = context;

  let post = await prisma.post.findFirst({
    where: {
      slug: params.id,
    },
  });

  return NextResponse.json({
    success: true,
    data: post,
  });
};

export const POST = async (req: NextRequest, context: any) => {
  return NextResponse.json({});
};
