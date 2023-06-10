import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import cloudinary from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.v2.config({
  cloud_name: 'divg4kqqk',
  api_key: '416832266753631',
  api_secret: 'DpcR-Nv_ueTL208bV8q8ue_hU9s',
});

export const GET = async (req: NextRequest) => {
  console.log('CALLED');
  return NextResponse.json({
    success: true,
    time: '2021-12-23 16:30:01',
    data: {
      sources: [
        {
          baseurl: 'https://res.cloudinary.com/divg4kqqk/image/upload/',
          path: 'v1686331765/foo/',
          files: [
            {
              name: '/bsem5aqeczfyhnbuovmk.png',
              type: 'image',
            },
            {
              name: '/bsem5aqeczfyhnbuovmk.png',
              type: 'image',
            },
          ],
          name: 'img',
        },
      ],
    },
  });
};

export const POST = async (req: NextRequest) => {
  console.log(req);

  // const res = await uploadFromBuffer(req);

  return NextResponse.json(
    {
      success: true,
      message: 'Image uploaded successfully.',
      data: {
        url: 'https://res.cloudinary.com/divg4kqqk/image/upload/v1686392050/foo/gvjfn3i3cqp3paobudzo.jpg',
        thumbnailUrl:
          'https://res.cloudinary.com/divg4kqqk/image/upload/v1686392050/foo/gvjfn3i3cqp3paobudzo.jpg',
        filename: 'image.jpg',
        size: '1024 KB',
      },
    },
    {
      status: 200,
    }
  );
};

let uploadFromBuffer = async (req: NextRequest) => {
  const data = await req.formData();
  const file: File | null = data.get('img') as unknown as File;

  if (!file) {
    return NextResponse.json({
      success: true,
      message: 'Image uploaded successfully.',
      data: {
        url: 'https://example.com/images/image.jpg',
        thumbnailUrl: 'https://example.com/images/thumbnail.jpg',
        filename: 'image.jpg',
        size: '1024 KB',
      },
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.v2.uploader.upload_stream(
      {
        folder: 'foo',
      },
      (error: any, result: any) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    streamifier.createReadStream(buffer).pipe(cld_upload_stream);
  });
};
