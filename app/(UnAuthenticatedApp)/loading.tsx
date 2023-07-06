import ComponentWrapper from '@/components/common/ComponentWrapper';
import Loader from '@/components/common/Loader';

export default function Loading() {
  return (
    <ComponentWrapper className='min-h-[80vh] w-full flex justify-center items-center'>
      <Loader />
    </ComponentWrapper>
  );
}
