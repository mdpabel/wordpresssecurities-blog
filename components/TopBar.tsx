import React from 'react'
import ComponentWrapper from './ComponentWrapper'

const TopBar = () => {
  return (
    <div className="bg-black text-white py-2">
      <ComponentWrapper>
        <div className="flex justify-between font-semibold text-sm">
          <div>Discover how to protect your WordPress site from threats</div>
          <nav className='hidden md:block'>
            <ul className='flex justify-between space-x-6'>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </nav>
        </div>
      </ComponentWrapper>
    </div>
  )
}

export default TopBar