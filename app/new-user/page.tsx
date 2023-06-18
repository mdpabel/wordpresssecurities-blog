'use client';
import { useUser } from '@clerk/nextjs';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import LinkComponent from '@/components/Add-New/LinkComponent';
import Button from '@/components/common/Button';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import ImageUpload from '@/components/common/ImageUpload';
import Input, { InputWrapper, TextArea } from '@/components/common/Input';
import { createNewUser } from '@/utils/user';
import { useAsync } from '@/hooks/useAsync';
import Spinner from '@/components/common/Spinner';

const NewUser = () => {
  const user = useUser();
  const { run, isSuccess, isLoading, isError, data, error } = useAsync();
  const [image, setImage] = useState('');
  const [story, setStory] = useState('');
  const [description, setDescription] = useState('');
  const [links, setLinks] = useState([
    {
      link: '',
      type: '',
    },
  ]);

  const saveProfile = () => {
    run(
      createNewUser({
        bio: description,
        links,
        occupation: story,
        profilePic: image,
      })
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
          <Input
            readOnly
            placeholder=''
            id='fullName'
            value={user.user?.firstName ?? '' + ' ' + user.user?.lastName ?? ''}
          />
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
        <Button onClick={saveProfile} className='mt-8'>
          Save profile {isLoading ? <Spinner /> : ''}
        </Button>
      </div>
    </ComponentWrapper>
  );
};

export default NewUser;
