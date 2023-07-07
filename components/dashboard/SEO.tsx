import React from 'react';

interface ISeo {
  metas: {
    title: string;
    description: string;
    keywords: string;
  };
  setMetas: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      keywords: string;
    }>
  >;
}

const SEO = ({ metas, setMetas }: ISeo) => {
  return (
    <div className='w-full p-8 mx-auto space-y-4  border rounded md:w-1/2'>
      <div className='flex flex-col space-y-3'>
        <label htmlFor='title'>Meta Title</label>
        <input
          onChange={(e) =>
            setMetas({
              ...metas,
              title: e.target.value,
            })
          }
          value={metas.title}
          className='w-full px-5 py-2 rounded'
          name='title'
          type='text'
          id='title'
        />
      </div>

      <div className='flex flex-col space-y-3'>
        <label htmlFor='Description'>Meta Description</label>
        <textarea
          value={metas.description}
          onChange={(e) =>
            setMetas({
              ...metas,
              description: e.target.value,
            })
          }
          className='w-full px-5 py-2 rounded'
          name='description'
          id='Description'
        />
      </div>

      <div className='flex flex-col space-y-3'>
        <label htmlFor='Keywords'>Meta Keywords</label>
        <input
          value={metas.keywords}
          onChange={(e) =>
            setMetas({
              ...metas,
              keywords: e.target.value,
            })
          }
          className='w-full px-5 py-2 rounded'
          name='keywords'
          type='text'
          id='Keywords'
        />
      </div>
    </div>
  );
};

export default SEO;
