'use client';
import {
  Facebook,
  LinkedIn,
  MailIcon,
  Twitter,
} from '@/components/common/socialMediaIcons';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import ViewCount from './ViewCount';

interface ISocialShare {
  url: string;
  id : string;
}

const SocialShare = ({ url, id }: ISocialShare) => {
  return (
    <div className='flex pb-4 space-x-4'>
      <ViewCount id={id} />
      <FacebookShareButton url={url}>
        <div
          style={{
            backgroundColor: '#4460A0',
            color: '#fff',
          }}
          className='flex items-center px-5 py-1 space-x-3 rounded cursor-pointer'
        >
          <span>
            <Facebook />
          </span>
          <span>Share</span>
        </div>
      </FacebookShareButton>

      <TwitterShareButton url={url}>
        <div
          style={{
            backgroundColor: '#2795E9',
            color: '#fff',
          }}
          className='flex items-center px-5 py-1 space-x-3 rounded cursor-pointer'
        >
          <span>
            <Twitter />
          </span>
          <span>Tweet</span>
        </div>
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <div
          style={{
            backgroundColor: '#007EBB',
            color: '#fff',
          }}
          className='flex items-center px-5 py-1 space-x-3 rounded cursor-pointer'
        >
          <span>
            <LinkedIn />
          </span>
          <span>Share</span>
        </div>
      </LinkedinShareButton>

      <EmailShareButton url={url}>
        <div
          style={{
            backgroundColor: '#CD2900',
            color: '#fff',
          }}
          className='flex items-center px-5 py-1 space-x-3 rounded cursor-pointer'
        >
          <span>
            <MailIcon />
          </span>
          <span>Email</span>
        </div>
      </EmailShareButton>
    </div>
  );
};

export default SocialShare;
