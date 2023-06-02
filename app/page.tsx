import Image from 'next/image';
import Hero from './Hero';
import FeaturedPosts from './FeaturedPosts';
import NewBlogs from './NewBlogs';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <FeaturedPosts />
      {/* <NewBlogs /> */}
      <div className='pt-[300px]'></div>
    </main>
  );
}
