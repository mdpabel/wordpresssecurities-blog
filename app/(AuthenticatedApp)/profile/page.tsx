import ComponentWrapper from '@/components/common/ComponentWrapper';
import withAuth from '@/components/common/withAuth';
import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => (
  <ComponentWrapper>
    <UserProfile path='/profile' routing='path' />
  </ComponentWrapper>
);

export default withAuth(UserProfilePage);
