import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

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
      <section>{children}</section>
      <Footer />
    </>
  );
}
