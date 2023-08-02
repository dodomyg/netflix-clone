// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

import {FaHeart, FaRegHeart} from "react-icons/fa"
const Movie =({item,id})=> {
    const [like,setLike]=useState(false)
  return (
    <div key={item?.key} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block cursor-pointer p-2 relative'>
                  <img className='w-full h-auto  block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.original_title} />
                  <div className='opacity-0 top-0 left-0 absolute w-full h-full hover:bg-black/70 hover:opacity-100  text-white'>
                    <p className='px-2 white-space-normal  text-xs md:text-sm font-bold flex justify-center text-center h-full items-center'>{item?.original_title}</p>
                    <p>
                      {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
                    </p>
                  </div>
              </div>
  )
}

export default Movie
