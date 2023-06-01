import React from 'react';

const Hero = () => {
  return (
    <section className='container flex flex-col items-center justify-center px-4 mx-auto space-y-5 md:px-0 h-52 md:h-60'>
      <h1 className='text-2xl font-semibold text-center md:text-6xl'>
        Unmasking Threats
      </h1>
      <h2 className='mx-auto text-base font-medium text-center md:text-lg'>
        Hackers don't take vacations. Keep your WordPress site secure and give
        them no chance to exploit vulnerabilities.
      </h2>
    </section>
  );
};

export default Hero;
