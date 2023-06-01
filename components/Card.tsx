import React from 'react'
import clsx from 'clsx';

const Card = ({ className = "" }: { className?: string }) => {
    console.log(className)
    return (
        <div>
            <div className={
                clsx({
                    'flex flex-col w-96 bg-white p-8 rounded-md shadow': true,
                    className: className
                })
            }>
                <img className='w-full' src="https://www.elegantthemes.com/blog/wp-content/uploads/2021/12/wordpress-hacked-featured-image-1.jpg" alt="" />
                <div className='space-y-4'>
                    <div className='space-y-1'>
                        <span className='font-medium'>11 December 2022</span>
                        <h2 className='font-semibold tracking-wide text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h2>
                        <p className='text-sm tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aperiam  adipisicing elit. Rem, aperiam.</p>
                    </div>
                    <div className='flex space-x-4 items-center'>
                        <img width="40" height='40' className='rounded-full w-10 h-10' src="https://avatars.githubusercontent.com/u/64641522?s=400&v=4" alt="" />
                        <div>
                            <h4 className='font-semibold text-sm'>MD Pabel</h4>
                            <h6 className='text-sm text-gray-700'>Software engineer</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card