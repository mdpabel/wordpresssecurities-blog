'use client';
import React from 'react';
import { CldImage } from 'next-cloudinary';

interface IResponsiveImage {
  src: string;
  width: number;
  height: number;
  sizes?: string;
  alt: string;
  className?: string;
  crop?: 'crop' | 'fill' | 'lfill' | 'fill_pad' | 'thumb';
}

const ResponsiveImage = ({
  src,
  width,
  height,
  sizes,
  alt,
  className,
  crop,
}: IResponsiveImage) => {
  return (
    <CldImage
      className={className}
      width={width}
      height={height}
      src={src}
      sizes='100vw'
      alt={alt ?? ''}
      crop='fill'
      gravity='auto'
    />
  );
};

export default ResponsiveImage;
