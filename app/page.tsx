import Image from 'next/image';
import Hero from './Hero';
import FeaturedPosts from './FeaturedPosts';
import NewBlogs from './NewBlogs';
import FeaturedCoupons from './FeaturedCoupons';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Hero />
      <FeaturedPosts />
      <NewBlogs />
      <FeaturedCoupons />
      <div className='pt-[300px]'></div>
    </main>
  );
}
