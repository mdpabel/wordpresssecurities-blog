import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';

export default function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className='container flex flex-col items-center justify-center min-h-screen px-6 py-4 pt-32 mx-auto md:pt-0'>
        {children}
      </section>
      <Footer />
    </>
  );
}
