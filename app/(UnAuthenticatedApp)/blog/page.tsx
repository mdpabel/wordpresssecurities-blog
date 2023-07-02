import React, { use } from 'react';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import { getBlogs } from '@/utils/getBlogs';
import { BigCard, SmallCard } from '@/components/common/Card';
import { Title } from '@/components/common/Title';
import NewBlogs from '@/components/home/NewBlogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WordPress Security Blog | Expert Insights and Best Practices',
  description:
    'Stay updated with the latest insights, best practices, and expert advice on WordPress security. Our blog features articles written by the WordPressSecurities Editorial Team, a group of highly skilled WordPress professionals specializing in website security and malware removal.',
  keywords:
    'WordPress security blog, website security, WordPress security best practices, malware removal, WordPressSecurities Editorial Team',
  robots: 'index, follow',
  authors: [
    {
      name: 'WordPressSecurities Editorial Team',
      url: 'https://www.wordpresssecurities.com/',
    },
  ],
  category: 'Technology',
  abstract:
    'The WordPressSecurities Editorial Team is a collective of highly skilled WordPress professionals dedicated to providing expert insights and best practices for WordPress security. Stay informed and enhance the security of your WordPress site with our articles on website security, malware removal, and more.',
  applicationName: 'WordPress Securities',
  creator: 'WordPressSecurities Editorial Team',
  verification: {
    google: 'your-google-verification-code',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  classification: 'WordPress Security Blog',
  generator: 'next.js',
};

export const dynamic = 'force-static';
export const revalidate = 86400;

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
