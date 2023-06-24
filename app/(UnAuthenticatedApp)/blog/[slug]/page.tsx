import { notFound } from 'next/navigation';
import React, { use } from 'react';
import SocialShare from '@/components/blog/SocialShare';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import prisma from '@/db/mongo';
import { formateDate } from '@/utils/formateDate';

type PostType = {
  params: { slug: string };
};

export const dynamicParams = true;
export const dynamic = 'force-static';

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const getData = async (slug: string) => {
  if (!slug) {
    return notFound();
  }
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

  return res;
};

const Post = ({ params }: PostType) => {
  const data = use(getData(params?.slug));

  if (!data) {
    return notFound();
  }

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
          url={`https://wordpresssecurites.com/${params?.slug}`}
        />
        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      </div>
      <div className='w-full p-8 bg-white md:w-1/4'>Sidebar</div>
    </ComponentWrapper>
  );
};

export default Post;
