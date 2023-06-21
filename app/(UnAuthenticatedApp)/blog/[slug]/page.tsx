import SocialShare from '@/components/blog/SocialShare';
import ComponentWrapper from '@/components/common/ComponentWrapper';

import prisma from '@/db/mongo';
import { formateDate, formateDateAndTime } from '@/utils/formateDate';
import { notFound } from 'next/navigation';
import React, { use } from 'react';

type PostType = {
  slug: string;
};

export const dynamicParams = true;
export const dynamic = 'error';
export const revalidate = 60 * 10;

export const generateStaticParams = async () => {
  const posts = await prisma.post.findMany();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const getData = async (slug: string) => {
  const res = await prisma.post.findFirst({
    where: {
      slug: slug,
    },
    include: {
      author: {
        select: {
          firstName: true,
          lastName: true,
          links: true,
        },
      },
    },
  });
  if (!res) {
    return notFound();
  }

  return res;
};

const Post = ({ slug }: PostType) => {
  const data = use(getData(slug));

  return (
    <ComponentWrapper className='flex flex-col mt-10 space-x-8 md:flex-row'>
      <div className='w-full p-8 space-y-4 bg-white rounded md:w-3/4 '>
        <h1 className='text-3xl font-bold'>{data?.title}</h1>
        <div>Last updated on {formateDate(data?.updatedAt)}</div>
        <div>
          Blogger : {data?.author?.firstName + ' ' + data?.author?.lastName}
        </div>
        <SocialShare
          id={data?.id}
          url={`https://wordpresssecurites.com/${slug}`}
        />
        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      </div>
      <div className='w-full p-8 bg-white md:w-1/4'>Sidebar</div>
    </ComponentWrapper>
  );
};

export default Post;
