'use client';

import { FormEvent, ChangeEvent } from 'react';
import { UploadIcon } from '@/components/common/icons';

interface ICoverImg {
  setCoverImg: React.Dispatch<React.SetStateAction<string>>;
  coverImg: string;
}

const CoverImg = ({ setCoverImg, coverImg }: ICoverImg) => {
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      // @ts-ignore
      setCoverImg(onLoadEvent.target?.result);
    };
    if (!e.target.files) {
      return;
    }
    reader.readAsDataURL(e.target?.files[0]);
  };

  return (
    <div className='flex justify-between w-full md:w-1/2 md:items-center md:justify-center '>
      <div className='w-1/2'>
        {coverImg ? (
          <img width={200} height={200} src={coverImg} alt='Cover img' />
        ) : (
          <div>Select a cover image</div>
        )}
      </div>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col items-center justify-center w-1/2 w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer '
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
    </div>
  );
};

export default CoverImg;
