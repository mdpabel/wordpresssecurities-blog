import Sidebar from '@/components/common/Sidebar';
import { PostContextProvider } from '@/context/blogContext';

export default function AuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='flex flex-no-wrap h-full min-h-screen'>
        <aside>
          <Sidebar />
        </aside>
        <PostContextProvider>
          <section className='w-full'>{children}</section>
        </PostContextProvider>
      </div>
    </>
  );
}
