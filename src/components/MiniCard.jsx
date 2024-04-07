import React from 'react'
import { BsDot } from "react-icons/bs";

const MiniCard = (props) => {
    const index=props.index;
    const setIndex=props.setIndex;
    const data=props.data;
    const setCardData=props.setCardData;
    const id=props.id
    console.log(index)

    const clickHandler=()=>{
        setIndex(id)    
    }
  return (
    <div className={`w-[400px] h-[200px] p-8 rounded-md flex flex-col items-start gap-y-3 ${ (index=== id) ? "bg-[#a158fd]" :"bg-white" } hover:scale-105 transition-all duration-1000`} onClick={clickHandler}>
        <div className={` ${ (index=== id) ? "text-white" :"text-[#666666]"} flex items-center gap-x-1 `}>{data?.gender} <BsDot/> {data?.nat}</div>
        <div className={`text-xl font-bold ${ (index=== id) ?"text-white" :"text-black"}`}>{data?.name?.title} {data?.name?.first} {data?.name?.last}</div>
        <div className={`${(index===id)?"text-white":"text-[#E16259]"}`}>{data?.email}</div>
    </div>
  )
}

export default MiniCard