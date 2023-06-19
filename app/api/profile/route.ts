import prisma from '@/db/mongo';
import cloudinary from '@/utils/cloudinaryConfig';
import { getCurrentUser } from '@/utils/getCurrentUser';
import { currentUser } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async () => {
  const res = await getCurrentUser();
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
      }
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
    }
  );
};
