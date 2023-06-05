'use client';
import { EmailIcon, LockIcon, OpenEye, CloseEye } from '@/components/icons';
import React, { useState } from 'react';
import ComponentWrapper from '@/components/ComponentWrapper';
import Button from '@/components/Button';

const Login = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleSubmission = () => {};

  return (
    <ComponentWrapper className='w-full max-w-md min-h-[80vh] pt-24 mx-auto space-y-6'>
      <h2 className='z-10 inline-block w-full px-10 py-2 text-3xl font-bold text-center'>
        Login
      </h2>
      <form className='space-y-6'>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <EmailIcon />
          </div>
          <input
            type='email'
            id='email-address-icon'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 '
            placeholder='contact@wordpresssecurities.com'
          />
        </div>

        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <LockIcon />
          </div>
          <input
            type='password'
            id='email-address-icon'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 '
            placeholder='********'
          />
          <div className='absolute inset-y-0 flex items-center pl-3 cursor-pointer pointer-events-none right-4'>
            {isTrue ? (
              <div onClick={() => setIsTrue(false)}>
                <CloseEye />
              </div>
            ) : (
              <div onClick={() => setIsTrue(true)}>
                <OpenEye />
              </div>
            )}
          </div>
        </div>

        <div className='flex justify-center'>
          <Button onClick={handleSubmission}>Login</Button>
        </div>
      </form>
    </ComponentWrapper>
  );
};

export default Login;
