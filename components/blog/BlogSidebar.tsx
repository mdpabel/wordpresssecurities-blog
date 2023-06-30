import HiringPromotion from './HiringPromotion';
import SocialLinks from './SocialLinks';
import DealAndCoupon from './AffiliatePromotion';
import Scan from './Scan';
import AboutAuthor from './AboutAuthor';
import { Link, User } from '@prisma/client';

const BlogSidebar = ({
  postId,
  author,
  links,
}: {
  postId: string;
  author: User;
  links: Link[];
}) => {
  return (
    <div className='flex flex-col space-y-5'>
      <Scan />
      <HiringPromotion />
      <SocialLinks />
      <DealAndCoupon />
      <AboutAuthor author={author} links={links} />
    </div>
  );
};

export default BlogSidebar;
