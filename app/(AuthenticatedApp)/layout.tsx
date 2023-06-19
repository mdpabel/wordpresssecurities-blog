import Sidebar from '@/components/common/Sidebar';

export default function AuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-no-wrap h-full min-h-screen'>
      <aside>
        <Sidebar />
      </aside>
      <section className='w-full'>{children}</section>
    </div>
  );
}
