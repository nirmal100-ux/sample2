import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2NkYzU5YTQ1NjJiZTkxYzc4YTdkYWRmODc3YzBhNiIsInN1YiI6IjY0OWMxZDBiYzM5MjY2MDBhYzY2OWFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cAzg1cf9BfVMfhU0de4avublnRbkB4qJr47TVtNwqIs';


export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: 'https://api.themoviedb.org/3'
    }),

  endpoints: (builder) => ({

    nowplaying: builder.query({
      query: () => ({
        url: '/movie/now_playing',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    }),






    movieBycategory: builder.query({
      query: (Category) => ({
        url: `/movie/${Category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })
    }),


    movieVideo: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        }
      })

    }),
    searchMovie: builder.query({
      query: (query) => ({
        url: '/search/movie',
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          query
        }
      })

    }),

    movieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },
        params: {
          page: query.page
        }
      })

    }),
    movieById: builder.query({
      query: (query) => ({
        url: `https://api.themoviedb.org/3/movie/${query}`,
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: token
        },

      })

    })


  })

});
export const { useMovieBycategoryQuery, useNowplayingQuery, useMovieVideoQuery, useSearchMovieQuery, useMovieByPageQuery, useMovieByIdQuery } = movieApi;

