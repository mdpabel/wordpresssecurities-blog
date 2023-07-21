import prisma from '@/db/mongo';
import cloudinary from '@/utils/cloudinaryConfig';
import { currentUser } from '@clerk/nextjs';
import { Link } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const user = await currentUser();
  const res = await prisma.user.findFirst({
    where: {
      clerkUserId: user?.id,
    },
    include: {
      links: true,
    },
  });

  return NextResponse.json({
    success: true,
    data: res,
  });
};

export const POST = async (req: NextRequest) => {
  const { bio, occupation, profilePic, links } = await req.json();
  const user = await currentUser();

  if (
    !user?.emailAddresses[0]?.emailAddress ||
    !user?.id ||
    !user?.firstName ||
    !user?.lastName
  ) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 401,
      },
    );
  }

  const { secure_url } = await cloudinary.v2.uploader.upload(profilePic, {
    overwrite: true,
    invalidate: true,
    width: 450,
    height: 250,
    crop: 'fill',
  });

  const newUser = await prisma.user.create({
    data: {
      email: user?.emailAddresses[0]?.emailAddress as string,
      bio,
      clerkUserId: user?.id as string,
      firstName: user?.firstName as string,
      lastName: user?.lastName as string,
      occupation,
      profilePic: secure_url || profilePic,
    },
  });

  const linksRes = await prisma.link.createMany({
    data: links.map((li: any) => ({
      type: li.type,
      url: li.link,
      userId: newUser?.id,
    })),
  });

  return NextResponse.json(
    {
      success: true,
      // data: newUser,
    },
    {
      status: 201,
    },
  );
};

export const PUT = async (req: NextRequest) => {
  try {
    const { bio, occupation, profilePic, links } = await req.json();
    const clerkUser = await currentUser();

    const user = await prisma.user.findFirst({
      where: {
        clerkUserId: clerkUser?.id,
      },
      include: {
        links: true,
      },
    });

    const { secure_url } = await cloudinary.v2.uploader.upload(profilePic, {
      overwrite: true,
      invalidate: true,
      width: 450,
      height: 250,
      crop: 'fill',
    });

    const updatedUser = await prisma.user.update({
      where: {
        id: user?.id,
      },
      data: {
        bio,
        occupation,
        profilePic: secure_url || profilePic,
      },
    });

    await prisma.link.deleteMany({
      where: {
        userId: updatedUser.id,
      },
    });

    const linksRes = await prisma.link.createMany({
      data: links.map((li: any) => ({
        type: li.type,
        url: li.link,
        userId: updatedUser?.id,
      })),
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully updated profile',
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong during updating profile',
    });
  }
};
