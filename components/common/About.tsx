import React from 'react';
import Image from 'next/image';
import ComponentWrapper from '../blog/ComponentWrapper';

const About = () => {
  return (
    <ComponentWrapper className='grid grid-cols-3 gap-5 py-10'>
      <div className='hidden col-span-1 md:block'>
        <Image
          className='object-cover'
          width={400}
          height={400}
          alt='WordPressSecurities team'
          src='/security_expert.jpg'
        />
      </div>
      <div className='col-span-3 md:col-span-2'>
        <h2 className='pb-5 text-lg font-semibold'>
          About WordPressSecurities staff
        </h2>
        <p>
          The WordPressSecurities Editorial Team is a collective of 20-25 highly
          skilled WordPress professionals with extensive experience in website
          security and malware removal. Led by a team of industry experts, our
          diverse group collaborates to provide comprehensive protection for
          your WordPress site. With our combined expertise, we ensure the
          highest level of security and peace of mind for our clients.
        </p>
      </div>
    </ComponentWrapper>
  );
};

export default About;
