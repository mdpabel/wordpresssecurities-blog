import cloudinary from '@/utils/cloudinaryConfig';
import { NextRequest, NextResponse } from 'next/server';
import streamifier from 'streamifier';

export const GET = async (req: NextRequest) => {
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

type CloudinaryUploadResponse = {
  secure_url?: string;
  success?: boolean;
  message?: string;
};

export const POST = async (req: NextRequest) => {
  const { secure_url } = await uploadFromBuffer(req);

  if (!secure_url) {
    return NextResponse.json({
      success: false,
      message: 'Please select an image',
    });
  }

  return NextResponse.json({ success: true, secure_url });
};

let uploadFromBuffer = async (
  req: NextRequest
): Promise<CloudinaryUploadResponse> => {
  const data = await req.formData();

  const file: File | null = data.get('image') as unknown as File;

  if (!file) {
    return new Promise((res) => {
      res({
        success: false,
        message: 'Please select an image',
      });
    });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise<CloudinaryUploadResponse>((resolve, reject) => {
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
