import React from 'react'

const TopBar = () => {
  return (
    <div className="bg-black text-white py-2">
      <div className="container mx-auto flex justify-between font-semibold text-sm px-4 md:px-0">
        <div>Discover how to protect your WordPress site from threats</div>
        <nav className='hidden md:block'>
          <ul className='flex justify-between space-x-6'>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TopBar