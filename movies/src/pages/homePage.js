import React, {lazy, Suspense } from "react";
import { getMovies } from "../api/movies-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
const AddToFavoritesIcon = lazy(() => import('../components/cardIcons/addToFavorites'));

const HomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // // Redundant, but necessary to avoid app crashing.
  // const favorites = movies.filter(m => m.favorite)
  // localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <Suspense fallback={<Spinner />}>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => (
          // Render the lazy-loaded AddToFavoritesIcon component
          <AddToFavoritesIcon movie={movie} addToFavorites={addToFavorites} />
        )}
      />
    </Suspense>
);
};
export default HomePage;