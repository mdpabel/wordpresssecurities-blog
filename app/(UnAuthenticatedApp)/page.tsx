import { use } from 'react';
import FeaturedCoupons from '../../components/home/FeaturedCoupons';
import FeaturedPosts from '@/components/home/FeaturedPosts';
import Hero from '@/components/home/Hero';
import NewBlogs from '../../components/home/NewBlogs';
import TopSecurityPlugins from '../../components/home/TopSecurityPlugins';
import { getBlogs } from '@/utils/getBlogs';

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Home() {
  const data = use(getBlogs());

  return (
    <main className='flex flex-col'>
      <Hero />
      <FeaturedPosts />
      <NewBlogs title={true} blogs={data} />
      <FeaturedCoupons />
      <TopSecurityPlugins />
    </main>
  );
}
