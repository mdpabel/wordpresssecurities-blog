import React, { ReactNode } from 'react'

const ComponentWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div className='container md:w-[80%] mx-auto px-4 md:px-0'>{children}</div>
    )
}

export default ComponentWrapper