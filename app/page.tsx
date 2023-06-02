import Image from 'next/image';
import Hero from './Hero';
import FeaturedPosts from './FeaturedPosts';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <FeaturedPosts />

      <div className='pt-[300px]'></div>
    </main>
  );
}
