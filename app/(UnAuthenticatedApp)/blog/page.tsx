import React, { use } from 'react';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { getBlogs } from '@/utils/getBlogs';
import { BigCard, SmallCard } from '@/components/common/Card';
import { Title } from '@/components/common/Title';
import { topPosts } from '@/utils/TakeTopPosts';
import NewBlogs from '@/components/home/NewBlogs';

const Blog = () => {
  const blogs = use(getBlogs());

  console.log(blogs.length);

  return (
    <ComponentWrapper>
      <div>FILTER</div>
      <NewBlogs title={false} blogs={blogs} />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {blogs.slice(5).map((blog) => (
          <SmallCard blog={blog} key={blog.id} />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Blog;

{
  /* <div className='flex space-x-10 max-h'>
        <div className='w-full space-y-10 md:w-2/3'>
          <BigCard blog={blogs[0]} />
        </div>
        <div className='w-full space-y-10 md:w-1/3'>
          <Title>Most popular</Title>
          {popularBlogs.map((blog) => (
            <SmallCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div> */
}
