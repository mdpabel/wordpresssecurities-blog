import React from 'react';
import { HostingCard } from '../common/Card';
import ComponentWrapper from '../common/ComponentWrapper';
import { Title } from '../common/Title';

const TopSecurityPlugins = () => {
  return (
    <ComponentWrapper className='pt-10'>
      <Title>Top Security Plugins You Need</Title>
      <div className='grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 lg:grid-cols-3'>
        <HostingCard
          title='Wordfence security'
          alt='wordfence'
          imgUrl='/images/wordfence.png'
          text="In the vast world of WordPress security plugins, one name stands out as a fortress protecting websites against malicious attacks - Wordfence Security Plugin. With the ever-growing online threats and cyberattacks, safeguarding your website is crucial. In this blog, we'll delve into why Wordfence is considered the best security plugin for WordPress and explore its powerful internal mechanisms that shield your website from potential harm."
        />
        <HostingCard
          title='All in one security'
          alt='All in one security'
          imgUrl='/images/all_in_one.png'
          text='As the digital landscape becomes increasingly complex, protecting your WordPress website from potential threats is paramount. One security plugin that encompasses a wide range of protective features is the All in One Security Plugin. In this blog, we will explore why the All in One Security Plugin is considered one of the best security solutions for WordPress websites. We will also delve into its internal mechanisms, providing you with insight into how this plugin effectively safeguards your valuable online presence.'
        />
        <HostingCard
          title='Jetpack'
          alt='jetpack'
          imgUrl='/images/jetpack.png'
          text='When it comes to WordPress plugins that combine powerful security features with a suite of essential functionalities, Jetpack stands out as a frontrunner. '
        />
      </div>
    </ComponentWrapper>
  );
};

export default TopSecurityPlugins;
