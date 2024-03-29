'use client';

import { useUser } from '@clerk/nextjs';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import LinkComponent from '@/components/Add-New/LinkComponent';
import Button from '@/components/common/Button';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import ImageUpload from '@/components/common/ImageUpload';
import Input, { InputWrapper, TextArea } from '@/components/common/Input';
import { createNewUser } from '@/utils/user';
import { useAsync } from '@/hooks/useAsync';
import Spinner from '@/components/common/Spinner';
import { useRouter } from 'next/navigation';
import { useUserByClerkId } from '@/hooks/useUserByClerkId';
import { Link } from '@prisma/client';
import withAuth from '@/components/common/withAuth';
import { client } from '@/utils/client';

const NewUser = () => {
  const { data } = useUserByClerkId();
  const router = useRouter();
  const user = useUser();
  const { run, isSuccess, isLoading, isError, error } = useAsync();
  const [image, setImage] = useState('');
  const [story, setStory] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState([
    {
      link: '',
      type: '',
    },
  ]);

  console.log(links);

  const fullName = user.user?.firstName + ' ' + user.user?.lastName ?? '';

  useEffect(() => {
    if (!data) return;
    setImage(data?.profilePic);
    setStory(data?.occupation);
    setDescription(data?.bio);
    setLinks(
      data?.links.map((link) => ({
        link: link.url,
        type: link.type,
      })),
    );
  }, [data]);

  const saveProfile = () => {
    run(
      client('/api/profile', {
        method: 'PUT',
        data: {
          bio: description,
          occupation: story,
          profilePic: image,
          links,
        },
      }),
    );
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      // @ts-ignore
      setImage(onLoadEvent.target?.result);
    };
    if (!e.target.files) {
      return;
    }
    reader.readAsDataURL(e.target?.files[0]);
  };

  const addNewLink = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const link = links[0].link;
    const type = links[0].type;

    if (!link || !type) {
      window.alert('Link and type is required');
      return;
    }

    setLinks([
      ...links,
      {
        link: '',
        type: '',
      },
    ]);
  };

  const handleLinkChange = (index: number, field: string, value: string) => {
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks];
      updatedLinks[index] = {
        ...updatedLinks[index],
        [field]: value,
      };
      return updatedLinks;
    });
  };

  return (
    <ComponentWrapper className='flex min-h-[80vh] flex-col items-center pt-10 md:flex-row'>
      <div className='flex flex-col items-center w-full md:w-1/2 '>
        <ImageUpload image={image} handleImage={handleImage} />
        <LinkComponent
          links={links}
          addNewLink={addNewLink}
          handleLinkChange={handleLinkChange}
        />
      </div>
      <div className='w-full md:w-1/2'>
        <InputWrapper>
          <Input readOnly placeholder='' id='fullName' value={fullName} />
        </InputWrapper>

        <InputWrapper>
          <Input
            readOnly
            id='email'
            value={user?.user?.emailAddresses[0]?.emailAddress ?? ''}
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            id='story'
            onChange={(e) => setStory(e.target.value)}
            value={story}
            placeholder='WordPress developer'
          />
        </InputWrapper>

        <InputWrapper>
          <TextArea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            id='description'
            placeholder="I'm..."
          />
        </InputWrapper>
        <Button onClick={saveProfile} className='mt-8 flex space-x-3'>
          Update profile {isLoading ? <Spinner /> : ''}
        </Button>
      </div>
    </ComponentWrapper>
  );
};

export default withAuth(NewUser);
