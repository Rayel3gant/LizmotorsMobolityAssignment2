import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full py-8 flex flex-col md:flex-row items-center justify-between  gap-y-5 uppercase px-8 border-b-2 border-black lg:mb-20 mb-12'>
        <div className='lg:w-[30%]   text-2xl font-bold '>
            Lizmotors assignment
        </div>

        <div className='lg:w-1/5  flex items-center gap-x-4'>
            <div>Product</div>
            <div>Download</div>
            <div>Pricing</div>

        </div>
    </div>
  )
}

export default NavBar