import React, { useState } from 'react'

const NavBar = () => {
  const [linkActive1,setLinkActive1]=useState(true)
  const [linkActive2,setLinkActive2]=useState(false)
  const [linkActive3,setLinkActive3]=useState(false)

  const linkHandler1=()=>{
    if(linkActive1===false){
      setLinkActive2(false)
      setLinkActive3(false)
      setLinkActive1(true)
    }
  }

  const linkHandler2=()=>{
    if(linkActive2===false){
      setLinkActive1(false)
      setLinkActive3(false)
      setLinkActive2(true)
    }
  } 

  const linkHandler3=()=>{
    if(linkActive3===false){
      setLinkActive1(false)
      setLinkActive2(false)
      setLinkActive3(true)
    } 
  }

  return (
    <div className='w-full py-8 flex flex-col md:flex-row items-center justify-between  gap-y-5 uppercase px-8 mb-8 '>
        <div className='lg:w-[30%]   text-2xl font-bold '>
            your challenge
        </div>

        <div className='lg:w-1/5  flex items-center gap-x-4'>
            <div onClick={linkHandler1} className={`${ (linkActive1==true) ? "border-b-2 border-[#E16259]" :""}` } >Product</div>
            <div onClick={linkHandler2} className={`${ (linkActive2===true) ? "border-b-2 border-[#E16259]" :""}` }>Download</div>
            <div onClick={linkHandler3} className={`${ (linkActive3===true) ? "border-b-2 border-[#E16259]" :""}` }>Pricing</div>

        </div>
    </div>
  )
}

export default NavBar