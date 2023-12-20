import React, {lazy, Suspense } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getTrending } from "../api/movies-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
const AddToFavoritesIcon = lazy(() => import('../components/cardIcons/addToMustWatch'));

const Trending = (props) => {

  const { data, error, isLoading, isError } = useQuery('latest',getTrending);

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
  // eslint-disable-next-line no-unused-vars
  const addToFavorites = (movieId) => true 

  return (
    <Suspense fallback={<Spinner />}>
    <PageTemplate
      title="Currently Trending Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    </Suspense>
);
};
export default Trending;
