import React, { ReactNode } from 'react'

const ComponentWrapper = ({ children, className = "" }: { children: ReactNode, className?: string }) => {
    return (
        <div className={`container md:w-[90%] mx-auto px-4 md:px-0 ` + className}>{children}</div>
    )
}

export default ComponentWrapper