import prisma from '@/db/mongo';
import cloudinary from '@/utils/cloudinaryConfig';
import { generateSlug } from '@/utils/generateSlug';
import { getCurrentUser } from '@/utils/getCurrentUser';
import { User } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html';

export const GET = async (req: NextRequest) => {
  return NextResponse.json({});
};

const categories = ['blog', 'hosting_review', 'coupons', 'vulnerabilities'];

export const POST = async (req: NextRequest) => {
  const user = (await getCurrentUser()) as User;
  try {
    const body: {
      title: string;
      coverImg: string;
      categories: string[];
      metas: {
        title: string;
        description: string;
        keywords: string;
      };
      content: string;
    } = await req.json();

    if (!body.content || !body.coverImg || !body.title) {
      return NextResponse.json({
        success: true,
        message: 'Post body and/or cover image and/or title are missing',
        data: null,
      });
    }

    const coverImage = await cloudinary.v2.uploader.upload(body.coverImg);

    const newBlog = await prisma.post.create({
      data: {
        coverImage: coverImage.secure_url || body.coverImg,
        content: sanitizeHtml(body.content),
        title: sanitizeHtml(body.title),
        metaDescription: sanitizeHtml(body.metas.description),
        metaKeywords: sanitizeHtml(body.metas.keywords),
        metaTitle: sanitizeHtml(body.metas.title),
        slug: generateSlug(sanitizeHtml(body.title)),
        authorId: user?.id as string,
        categories: body.categories.length > 0 ? body.categories : ['blog'],
      },
    });

    revalidatePath('/');

    return NextResponse.json({
      success: true,
      message: 'Successfully added new post',
      data: newBlog,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong',

      data: null,
    });
  }
};
