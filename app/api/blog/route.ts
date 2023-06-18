import prisma from '@/db/mongo';
import cloudinary from '@/utils/cloudinaryConfig';
import { getCurrentUser } from '@/utils/getCurrentUser';
import { User } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  return NextResponse.json({});
};

export const POST = async (req: NextRequest) => {
  const user = (await getCurrentUser()) as User;
  try {
    const body: {
      title: string;
      coverImg: string;
      metas: {
        title: string;
        description: string;
        keywords: string;
      };
      content: string;
    } = await req.json();

    const coverImage = await cloudinary.v2.uploader.upload(body.coverImg, {
      overwrite: true,
      invalidate: true,
      width: 450,
      height: 250,
      crop: 'fill',
    });

    const newBlog = await prisma.post.create({
      data: {
        coverImage: coverImage.secure_url || body.coverImg,
        content: body.content,
        title: body.title,
        metaDescription: body.metas.description,
        metaKeywords: body.metas.keywords,
        metaTitle: body.metas.title,
        authorId: user?.id as string,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully added new post',
      data: newBlog,
    });
  } catch (error) {
    console.log('/api/blog');
    console.log(error);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
