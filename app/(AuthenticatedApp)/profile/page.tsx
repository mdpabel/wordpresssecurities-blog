import ComponentWrapper from '@/components/common/ComponentWrapper';
import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => (
  <ComponentWrapper>
    <UserProfile path='/profile' routing='path' />
  </ComponentWrapper>
);

export default UserProfilePage;
