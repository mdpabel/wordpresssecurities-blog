import HiringPromotion from './HiringPromotion';
import SocialLinks from './SocialLinks';
import DealAndCoupon from './AffiliatePromotion';

const BlogSidebar = ({ postId }: { postId: string }) => {
  return (
    <div className='flex flex-col space-y-5'>
      <HiringPromotion postId={postId} />
      <SocialLinks />
      <DealAndCoupon />
    </div>
  );
};

export default BlogSidebar;
