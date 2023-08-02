// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Axios from "axios"
import requests from '../../Requests'

function Main() {

    const [movies,setMovies]=useState([])


    const movie =movies[Math.floor(Math.random() * movies.length)]
    useEffect(()=>{
        Axios.get(requests.trending).then((resp)=>{
            setMovies(resp.data.results)
        })
    },[])

    // console.log(movie);

    // const truncateString=(string,num)=>{
    //     if(string.length > num){
    //         return string.slice(0,num) + '...';
    //     }
    //     else{
    //         return string;
    //     }
    // }



  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
      <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}  />
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold text-white'>{movie?.original_title}</h1>
        <div className='my-4'>
            <button className="text-black border bg-gray-300 border-gray-300 py-2 px-5">Play</button>
            <button className="text-white border border-gray-300 py-2 px-5 ml-5">Watch Later</button>
        </div>
        <div>
            <p className='text-gray-300 my-2 text-sm'>Released :{movie?.release_date}</p>
            <p className='text-gray-200 w-full md:max-w-[70%] lg-max-w-[50%] xl:max-w-[35%]'>{movie?.overview}</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main
