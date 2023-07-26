import ComponentWrapper from '@/components/common/ComponentWrapper';
import Link from 'next/link';
import React from 'react';

interface IServiceCard {
  coverImg: string;
  title: string;
  details: string;
}

const ServiceCard = ({ coverImg, title, details }: IServiceCard) => {
  return (
    <>
      <Link href='/service/1' className='w-full px-4 md:w-1/2 lg:w-1/3'>
        <div className='mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10'>
          <div
            className={`mb-8 flex  p-3 items-center justify-center rounded-2xl bg-primary`}
          >
            <img src={coverImg} alt='cover_img' />
          </div>
          <h4 className='mb-3 text-xl font-semibold text-dark'>{title}</h4>
          <p className='text-body-color'>{details}</p>
        </div>
      </Link>
    </>
  );
};

const Service = () => {
  return (
    <ComponentWrapper className='space-y-5'>
      <div className='mx-auto max-w-[510px] text-center mt-5'>
        <h1 className='block text-3xl font-semibold text-primary'>
          Our Services
        </h1>
      </div>
      <form>
        <input
          className='w-full py-2 pl-3 mt-2 text-xs leading-none text-gray-900 border rounded font-base md:py-2 md:text-base focus:outline-none'
          type='text'
          name='search'
          placeholder='I need...'
        />
      </form>
      <div className='flex flex-wrap -mx-4'>
        <ServiceCard
          title='100+ Components'
          details='We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.'
          coverImg='/service/web_dev.jpg'
        />

        <ServiceCard
          title='100+ Components'
          details='We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.'
          coverImg='/service/web_dev.jpg'
        />

        <ServiceCard
          title='100+ Components'
          details='We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.'
          coverImg='/service/web_dev.jpg'
        />
        <ServiceCard
          title='100+ Components'
          details='We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.'
          coverImg='/service/web_dev.jpg'
        />
        <ServiceCard
          title='100+ Components'
          details='We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.'
          coverImg='/service/web_dev.jpg'
        />
        <ServiceCard
          title='100+ Components'
          details='We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.'
          coverImg='/service/web_dev.jpg'
        />
        <ServiceCard
          title='100+ Components'
          details='We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics.'
          coverImg='/service/web_dev.jpg'
        />
      </div>
    </ComponentWrapper>
  );
};

export default Service;
