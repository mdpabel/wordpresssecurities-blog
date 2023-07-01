import prisma from '@/db/mongo';
import { NextRequest, NextResponse } from 'next/server';

export type TCoupon = {
  categories: string[];
  name: string;
  discount: string;
  description: string;
  details: string;
  review: string;
  link: string;
};

export const POST = async (req: NextRequest) => {
  try {
    const body: TCoupon = await req.json();

    const newCoupon = await prisma.coupon.create({
      data: {
        categories: body.categories,
        name: body.name,
        description: body.description,
        details: body.details,
        reviews: body.review,
        discount: Number(body.discount),
        link: body.link,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully created new coupon',
      data: newCoupon,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: 'Failed to create new coupon',
      data: null,
    });
  }
};
