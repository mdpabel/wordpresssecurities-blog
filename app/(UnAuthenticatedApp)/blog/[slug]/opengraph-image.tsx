/* eslint-disable @next/next/no-img-element */

import prisma from '@/db/mongo';
import { Post } from '@prisma/client';
import { ImageResponse } from 'next/server';

export const alt = 'About Acme';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const post: Post = await fetch(`blog/${params.slug}`).then((res) =>
    res.json(),
  );

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={post?.coverImage} alt={post?.title} />
        <h2>{post?.title}</h2>
      </div>
    ),
    {
      ...size,
    },
  );
}
