import { use } from 'react';
import Title from './Title';
import prisma from '@/db/mongo';
import { topPosts } from '@/utils/TakeTopPosts';
import { SmallCard } from '../common/Card';
import ComponentWrapper from './ComponentWrapper';

const Popular = () => {
  const data = use(topPosts(4));

  return (
    <ComponentWrapper>
      <Title>Discover the Hottest Topics on WordPressSecurities</Title>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        {data?.map((post) => (
          <SmallCard key={post.id} blog={post} className='shadow-none ' />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Popular;
