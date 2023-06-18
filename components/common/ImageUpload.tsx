import React, { ChangeEvent } from 'react';
import { UploadIcon } from '@/components/common/icons';

interface IImageUpload {
  handleImage: (e: ChangeEvent<HTMLInputElement>) => void;
  image: string;
}

const ImageUpload = ({ handleImage, image }: IImageUpload) => {
  return (
    <div>
      {image ? (
        <div className='w-52 h-52'>
          <label htmlFor='dropzone-file'>
            <img
              title='Change Image'
              className='rounded-full cursor-pointer w-52 h-52 '
              width={200}
              height={200}
              src={image}
              alt='Cover img'
            />
          </label>
          <input
            onChange={handleImage}
            id='dropzone-file'
            type='file'
            name='file'
            className='hidden'
          />
        </div>
      ) : (
        <label
          htmlFor='dropzone-file'
          className='flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer '
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <UploadIcon />
            <p className='mb-2 text-sm text-gray-500'>
              <span className='font-semibold'>Click to upload</span> or drag and
              drop
            </p>
            <p className='text-xs text-gray-500'>
              Upload the post cover image (MAX. 800x400px)
            </p>
          </div>
          <input
            onChange={handleImage}
            id='dropzone-file'
            type='file'
            name='file'
            className='hidden'
          />
        </label>
      )}
    </div>
  );
};

export default ImageUpload;
