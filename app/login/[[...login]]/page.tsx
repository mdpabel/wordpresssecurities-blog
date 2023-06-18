import ComponentWrapper from '@/components/common/ComponentWrapper';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <ComponentWrapper className='flex justify-center items-center min-h-[80vh]'>
      <SignIn />
    </ComponentWrapper>
  );
}
