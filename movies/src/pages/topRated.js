import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTopRated } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from "../components/cardIcons/addToMustWatch";

const TopRated = (props) => {

  const { data, error, isLoading, isError } = useQuery('latest',getTopRated);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results
  console.log(data)

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Top Rated Movies Of All Time"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default TopRated;