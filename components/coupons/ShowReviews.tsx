'use client';
import React, { useState } from 'react';

const ShowReviews = ({ content }: { content: any }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='flex flex-col items-end'>
      <button onClick={() => setShow(!show)}>Show Details</button>
      {show && (
        <div
          className='w-full bg-white z-50 p-8 border shadow-lg mt-5'
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      )}
    </div>
  );
};

export default ShowReviews;
