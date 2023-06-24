import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';

export default function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <header>
        <Header />
      </header> */}
      <section>{children}</section>
      <Footer />
    </>
  );
}
