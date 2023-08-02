// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Axios from "axios"

import Movie from './Movie'

// eslint-disable-next-line react/prop-types
function Row({title,fetchURL}) {

  const [movie,setMovie]=useState([])
  
  useEffect(()=>{
    Axios.get(fetchURL).then((resp)=>{
      setMovie(resp.data.results)
    })
  },[fetchURL])
  

  return (
    <div>
    <h2 className='text-white m-5 font-bold md:text-xl'>{title}</h2>
    <div className='flex items-center relative'>
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide'>
            {movie.map((item,id)=>
            (
              <Movie key={id} item={item} />
            )
            )}
        </div>
    </div>
    </div>
  )
}

export default Row
