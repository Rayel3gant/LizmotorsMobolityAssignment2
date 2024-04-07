import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../components/Loader';
import MiniCard from '../components/MiniCard';

const Home = () => {
    const [userData,setUserData]=useState(null);
    const [loading,setLoading]=useState(false)
    const [dataIndex,setIndex]=useState(null)
    const [cardData,setCardData]=useState(null)

    const getUserData=async()=>{
        setLoading(true)
        try{
            const response=await fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20')
            const data=await response.json() 
            setUserData(data.results)
            setIndex(0)
        } catch(error){
            console.log("error in getting user data");
            console.log(error)
        }
        setLoading(false)
    }


    useEffect(()=>{
        getUserData()
    },[])

    useEffect(()=>{
        setCardData(userData?.[dataIndex])
    },[dataIndex])

  return (
    <Fragment className='w-full min-h-screen '>
        {
            (loading) ? (
                <div className='w-full h-screen flex justify-center items-center'>
                    <Loader/>
                </div>
            ) : (
                <div className='w-full px-4'>


                    <div className='w-11/12 md:w-[700px] lg:w-[900px] md:mx-auto shadow-2xl  flex flex-col gap-5 place-content-start md:flex-row md:justify-between p-10 rounded-md border-2 border-[#667799]  bg-white '>
                                <div className='md:w-[15%] self-center'>
                                    <img src={cardData?.picture?.large} className='w-[120px] h-[120px] rounded-full'/>
                                </div>


                                <div className='md:w-[75%] flex flex-col items-start gap-y-1 text-lg'>
                                    <div className='lg:text-5xl md:text-3xl text-xl underline font-bold text-[#E16259] self-start'>{cardData?.name?.title} {cardData?.name?.first} {cardData?.name?.last}</div>
                                    <div className='mt-2 self-start '>
                                        <span className='text-[#A259FF] font-bold'>{cardData?.location?.street?.number}</span>, 
                                        { cardData?.location?.street?.name},
                                        { cardData?.location?.city},
                                        { cardData?.location?.state},
                                        <span className='font-bold'>{ cardData?.location?.country}</span>,
                                        { cardData?.location?.postcode}
                                    </div>
                                    <div>{cardData?.location?.timezone?.offset} {cardData?.location?.timezone?.description}</div>
                                    <div className='text-[#8A8A8A]'>{cardData?.gender}</div>
                                </div>
                    </div>


                    <div className='w-full py-12 pb-12 flex flex-wrap place-content-center gap-8 px-12 mx-auto md:mt-20 mt-8'>
                    {
                        userData?.map((item,index)=>{
                            return <MiniCard key={index} id={index} index={dataIndex} setIndex={setIndex} data={item} setCardData={setCardData}/>
                        })
                    }
                    </div>
                </div>
            )
            
        }

    </Fragment>
  )
}

export default Home