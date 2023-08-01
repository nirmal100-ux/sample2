import React from 'react'

import MovieShow from '../conponents/MovieShow';
import { useNowplayingQuery } from '../features/movieApi';


const HomePage = () => {

  const { data, isLoading, isError, error } = useNowplayingQuery();


  return (
    <>

      <MovieShow data={data} isLoading={isLoading} isError={isError} error={error} />
    </>
  )
}

export default HomePage
