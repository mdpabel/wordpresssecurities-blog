'use client';
import React from 'react';
import { ClerkProvider, useUser, SignIn, SignedOut } from '@clerk/nextjs';
import Input, { InputWrapper, TextArea } from '@/components/common/Input';
import { useUserByClerkId } from '@/hooks/useUserByClerkId';
import Button from '@/components/common/Button';
import ImageUpload from '@/components/common/ImageUpload';
import LinkComponent from '@/components/Add-New/LinkComponent';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import Spinner from '@/components/common/Spinner';

const Profile = () => {
  const { user } = useUser();
  const data = useUserByClerkId();
  if (!user) return null;

  const { emailAddresses, firstName, lastName, passwordEnabled } = user;
  const { occupation, profilePic, bio } = data ?? {};

  return (
    <ComponentWrapper className='flex min-h-[80vh] flex-col items-center pt-10 md:flex-row'>
      {/* <div className='flex flex-col items-center w-full md:w-1/2 '>
        <ImageUpload image={image} handleImage={handleImage} />
        <LinkComponent
          links={links}
          addNewLink={addNewLink}
          handleLinkChange={handleLinkChange}
        />
      </div> */}
      <div className='w-full md:w-1/2'>
        <div className='flex space-x-4'>
          <Input
            readOnly
            placeholder=''
            id='fullName'
            value={firstName ?? ''}
          />
          <Input readOnly placeholder='' id='lastName' value={lastName ?? ''} />
        </div>

        <InputWrapper>
          <Input
            readOnly
            id='email'
            value={emailAddresses[0]?.emailAddress ?? ''}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            id='story'
            onChange={(e) => {}}
            value={occupation ?? ''}
            placeholder='WordPress developer'
          />
        </InputWrapper>

        <InputWrapper>
          <TextArea
            onChange={(e) => {}}
            value={bio ?? ''}
            id='description'
            placeholder="I'm..."
          />
        </InputWrapper>
        <Button onClick={() => {}} className='mt-8'>
          Save profile {1 ? <Spinner /> : ''}
        </Button>
      </div>
    </ComponentWrapper>
  );
};

export default Profile;
