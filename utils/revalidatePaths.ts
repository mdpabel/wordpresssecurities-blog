import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const revalidatePaths = (data: any) => {
  try {
    revalidatePath('/');
    revalidatePath('/blog');
    revalidatePath('/hosting-reviews');
    revalidatePath('/coupons');
    revalidatePath(`/blog/${data?.id}`);
  } catch (error) {
    return NextResponse.json({
      success: true,
      message:
        'Successfully added/updated a new post, but the paths have not been revalidated.',
      data: data,
    });
  }
};
