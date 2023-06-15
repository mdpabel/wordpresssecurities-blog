import prisma from '@/db/mongo';
import cloudinary from '@/utils/cloudinaryConfig';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  return NextResponse.json({});
};

export const POST = async (req: NextRequest) => {
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

    const user = await prisma.user.findFirst({
      where: {
        email: 'pabel7396@gmail.com',
      },
    });

    const coverImage = await cloudinary.v2.uploader.upload(body.coverImg, {
      overwrite: true,
      invalidate: true,
      width: 450,
      height: 250,
      crop: 'fill',
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'You are not allowed to post',
        },
        {
          status: 401,
        }
      );
    }

    const newBlog = await prisma.post.create({
      data: {
        coverImage: coverImage.secure_url || body.coverImg,
        content: body.content,
        title: body.title,
        metaDescription: body.metas.description,
        metaKeywords: body.metas.keywords,
        metaTitle: body.metas.title,
        authorId: user?.id,
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
