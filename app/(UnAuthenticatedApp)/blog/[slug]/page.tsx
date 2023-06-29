import { notFound } from 'next/navigation';
import React, { use } from 'react';
import SocialShare from '@/components/blog/SocialShare';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import prisma from '@/db/mongo';
import { formateDate } from '@/utils/formateDate';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogFooter from '@/components/blog/BlogFooter';
import AboutAuthor from '@/components/blog/AboutAuthor';
import Popular from '@/components/blog/Popular';

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
        include: {
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
    <ComponentWrapper className='flex flex-col mt-10 space-y-8 lg:space-x-8 lg:flex-row lg:space-y-0'>
      <div className='w-full space-y-10 lg:w-2/3'>
        <div className='p-8 space-y-4 bg-white rounded '>
          <h1 className='text-3xl font-bold'>{data?.title}</h1>
          <div>Last updated on {formateDate(data?.updatedAt)}</div>
          <SocialShare
            id={data?.id}
            url={`https://wordpresssecurites.com/${params?.slug}`}
          />
          <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          {/* <SocialShare
            id={data?.id}
            url={`https://wordpresssecurites.com/${params?.slug}`}
          /> */}
        </div>
        <div className='p-8 space-y-4 bg-white rounded '>
          <BlogFooter />
        </div>
        <Popular />
      </div>
      <div className='w-full lg:w-1/3'>
        <BlogSidebar
          links={data?.author?.links}
          author={data?.author}
          postId={data.author.id}
        />
      </div>
    </ComponentWrapper>
  );
};

export default Post;
