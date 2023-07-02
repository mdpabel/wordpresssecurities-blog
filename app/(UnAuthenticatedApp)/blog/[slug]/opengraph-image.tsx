/* eslint-disable @next/next/no-img-element */
import prisma from '@/db/mongo';
import { formateDateAndTime } from '@/utils/formateDate';
import { ImageResponse } from 'next/server';
export const size = {
  width: 1200,
  height: 630,
};
export const alt = 'Expolorer | Blog';
export const contentType = 'image/png';

export default async function og({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await prisma.post.findFirst({
    where: {
      slug: slug,
    },
    include: {
      author: true,
    },
  });

  return new ImageResponse(
    (
      <div tw='relative flex w-full h-full flex items-center justify-center'>
        {/* Background */}
        <div tw='absolute flex inset-0'>
          <img
            tw='flex flex-1'
            src={post?.coverImage + '&w=1200&h=630&auto=format&q=75'}
            alt={post?.title}
          />
          {/* Overlay */}
          <div tw='absolute flex inset-0 bg-black bg-opacity-50' />
        </div>
        <div tw='flex flex-col text-neutral-50'>
          {/* Title */}
          <div tw='text-7xl font-bold'>{post?.title}</div>
          {/* Tags */}
          <div tw='flex mt-6 flex-wrap items-center text-4xl text-neutral-200'>
            <div>
              {post?.metaDescription?.slice(0, 50) ??
                'Stay informed about the latest WordPress security best practices'}
            </div>
            <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300 ' />
            <div>{post?.author.firstName + ' ' + post?.author?.lastName}</div>
            <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
            <div>{post?.author?.occupation}</div>
            <div tw='w-4 h-4 mx-6 rounded-full bg-neutral-300' />
            <div>{formateDateAndTime(post?.createAt as Date)}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
