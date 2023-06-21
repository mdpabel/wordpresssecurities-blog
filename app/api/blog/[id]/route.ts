import prisma from '@/db/mongo';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, context: any) => {
  const { params } = context;

  let view = await prisma.view.findFirst({
    where: {
      postId: params?.id,
    },
  });

  return NextResponse.json({
    success: true,
    data: view?.count ?? 0,
  });
};

export const POST = async (req: NextRequest, context: any) => {
  const { params } = context;

  const post = await prisma.post.findFirst({
    where: {
      id: params?.id,
    },
  });

  if (!post) {
    return NextResponse.json(
      {
        success: false,
        message: 'No post found',
      },
      {
        status: 500,
      }
    );
  }

  let view = await prisma.view.findFirst({
    where: {
      postId: post?.id,
    },
  });

  if (!view) {
    view = await prisma.view.create({
      data: {
        postId: post?.id,
        count: 1,
      },
    });
  } else {
    view = await prisma.view.update({
      where: {
        id: view.id,
      },
      data: {
        count: {
          increment: 1,
        },
      },
    });
  }

  return NextResponse.json({
    success: true,
    data: view.count,
  });
};
