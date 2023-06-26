import React, { use } from 'react';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import { getBlogs } from '@/utils/getBlogs';
import { BigCard, SmallCard } from '@/components/common/Card';
import { Title } from '@/components/common/Title';
import NewBlogs from '@/components/home/NewBlogs';

export const dynamic = 'force-static';
export const revalidate = 600;

const Blog = () => {
  const blogs = use(getBlogs());

  return (
    <div className='pt-5 space-y-5'>
      <NewBlogs title={false} blogs={blogs} />

      <ComponentWrapper className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {blogs.slice(5).map((blog) => (
          <SmallCard blog={blog} key={blog.id} />
        ))}
      </ComponentWrapper>
    </div>
  );
};

export default Blog;
