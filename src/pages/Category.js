import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMovieBycategoryQuery } from '../features/movieApi';



const Category = () => {
  const { category } = useParams();



  const { data, isLoading, isError, error } = useMovieBycategoryQuery(category);

  const nav = useNavigate();

  if (isLoading) {
    return <div className='h-[400px] w-[400px] mx-auto mt-7'>
      <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_lit5uqwc.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }



  return (
    <>
      <div className='grid grid-cols-4 gap-5 p-6  msm:grid-cols-2 mmd:grid-cols-3'>
        {data.results.map((movie) => {
          return <div onClick={() => nav(`/movie/detail/${movie.id}`)} key={movie.id} className='cursor-pointer hover:scale-105 transition-all delay-75 shadow-lg'>
            <img className='h-[400px] w-full' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`} alt="" />

            <div className='p-3 space-y-2'>
              <h1 className='text-xl font-bold'>{movie.title}</h1>
              <p>{movie.overview.substring(0, 150) + '...'}</p>
            </div>



          </div>
        })}
      </div>


      <div className='flex justify-center pb-5 shadow-2xl'>
        <div className='flex space-x-5'>
          {data.page > 1 && <button>Prev</button>}
          <h1>1</h1>
          <button onClick={() => nav(`/searchpage/${category}/${data.page + 1}`)} >Next</button>
        </div>

      </div>

    </>
  )
}

export default Category
