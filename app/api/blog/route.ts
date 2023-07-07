import prisma from '@/db/mongo';
import cloudinary from '@/utils/cloudinaryConfig';
import { generateSlug } from '@/utils/generateSlug';
import { getCurrentUser } from '@/utils/getCurrentUser';
import { revalidatePaths } from '@/utils/revalidatePaths';
import { User } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import sanitizeHtml from 'sanitize-html';

export const GET = async (req: NextRequest) => {
  const user = (await getCurrentUser()) as User;

  if (!user) {
    return NextResponse.json(
      {
        success: false,
        data: [],
      },
      {
        status: 404,
      },
    );
  }

  const posts = await prisma.post.findMany({
    where: {
      authorId: user.id,
    },
    include: {
      author: true,
      View: true,
    },
  });

  if (!posts) {
    return NextResponse.json(
      {
        success: true,
        data: posts,
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json(
    {
      success: true,
      data: posts,
    },
    {
      status: 200,
    },
  );
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
        content: sanitizeHtml(body.content, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
          allowedAttributes: { img: ['src'] },
          allowedSchemes: ['data', 'http', 'https'],
        }),
        title: sanitizeHtml(body.title),
        metaDescription: sanitizeHtml(body.metas.description),
        metaKeywords: sanitizeHtml(body.metas.keywords),
        metaTitle: sanitizeHtml(body.metas.title),
        slug: generateSlug(sanitizeHtml(body.title)),
        authorId: user?.id as string,
        categories: body.categories.length > 0 ? body.categories : ['blog'],
      },
    });

    revalidatePaths(newBlog);

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

export const PUT = async (req: NextRequest, context: any) => {
  try {
    const user = (await getCurrentUser()) as User;
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
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: 'Post id is missing',
          data: null,
        },
        {
          status: 500,
        },
      );
    }

    const post = await prisma.post.findFirst({
      where: {
        id: id,
      },
    });

    if (!post) {
      return NextResponse.json({
        success: false,
        message: 'Post not found',
        data: null,
      });
    }

    if (!user || !user.id || user.id !== post?.authorId) {
      return NextResponse.json({
        status: false,
        message: 'You do not have permission to edit/update this post',
      });
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: post.id,
      },
      data: {
        coverImage: body?.coverImg,
        content:
          body.content ||
          sanitizeHtml(body.content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
            allowedAttributes: {
              ...sanitizeHtml.defaults.allowedAttributes,
              img: ['src'],
            },
            allowedSchemes: ['data', 'http', 'https'],
          }),
        title: sanitizeHtml(body.title),
        metaDescription: sanitizeHtml(body.metas.description),
        metaKeywords: sanitizeHtml(body.metas.keywords),
        metaTitle: sanitizeHtml(body.metas.title),
        slug: generateSlug(sanitizeHtml(body.title)),
        categories: body.categories.length > 0 ? body.categories : ['blog'],
      },
    });

    revalidatePaths(updatedPost);

    return NextResponse.json({
      success: true,
      message: 'Successfully updated post',
      data: updatedPost,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong',
      },
      {
        status: 500,
      },
    );
  }
};
