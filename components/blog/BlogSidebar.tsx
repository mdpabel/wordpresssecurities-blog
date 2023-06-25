import HiringPromotion from './HiringPromotion';
import SocialLinks from './SocialLinks';

const BlogSidebar = ({ postId }: { postId: string }) => {
  return (
    <div className='flex flex-col space-y-5'>
      <HiringPromotion postId={postId} />
      <SocialLinks />
    </div>
  );
};

export default BlogSidebar;
