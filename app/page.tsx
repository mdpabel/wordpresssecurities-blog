import Image from 'next/image';
import Hero from './Hero';
import FeaturedPosts from './FeaturedPosts';
import NewBlogs from './NewBlogs';
import FeaturedCoupons from './FeaturedCoupons';
import TopSecurityPlugins from './TopSecurityPlugins';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Hero />
      <FeaturedPosts />
      <NewBlogs />
      <FeaturedCoupons />
      <TopSecurityPlugins />
    </main>
  );
}
