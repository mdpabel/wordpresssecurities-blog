import React, { use } from 'react';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import prisma from '@/db/mongo';
import { Link, Post, User } from '@prisma/client';

interface IUserCard {
  profilePic: string;
  name: string;
  occupation: string;
  totalPost: number;
  links: {
    type: string;
    url: string;
  }[];
}

const UserCard = ({
  profilePic,
  name,
  occupation,
  links,
  totalPost,
}: IUserCard) => {
  return (
    <div className='bg-[#F0F0F0] shadow p-5 rounded grid grid-cols-2 gap-4'>
      <div className=''>
        <img
          className='rounded-full w-[150px] h-[150px] object-center'
          width={150}
          height={150}
          src={profilePic}
          alt={name}
        />
        <
      </div>
      <div className='space-y-4'>
        <div>
          <h2 className='text-xl font-bold'>{name}</h2>
          <h3 className='text-base font-medium'>{occupation}</h3>
        </div>
        <div className='flex flex-wrap gap-2'>
          {links?.map((link, index) => (
            <div className='border border-sky-800 rounded' key={index}>
              {link.type}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getData = async (): Promise<
  (User & {
    links: Link[];
    Post: Post[];
  })[]
> => {
  const user = await prisma.user.findMany({
    include: {
      links: true,
      Post: true,
    },
    orderBy: {
      Post: {
        _count: 'desc',
      },
    },
  });
  return user;
};

const EditorialTeam = () => {
  const users = use(getData());

  return (
    <ComponentWrapper>
      <h1 className='text-center text-3xl font-bold py-10'>
        Our Editorial Team
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
        {users?.map((user) => (
          <UserCard
            key={user?.id}
            links={[
              ...user?.links.map((link) => ({
                type: link.type,
                url: link.url,
              })),
              {
                type: 'email',
                url: user?.email,
              },
            ]}
            name={user?.firstName + ' ' + user?.lastName}
            occupation={user?.occupation}
            profilePic={user?.profilePic}
            totalPost={user?.Post.length ?? 0}
          />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default EditorialTeam;
