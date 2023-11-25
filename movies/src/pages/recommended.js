import React, {lazy, Suspense } from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { getRecommendations } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import PageTemplate from "../components/templateMovieListPage";

const AddToFavoritesIcon = lazy(() => import('../components/cardIcons/addToFavorites'));

const Recommended = (props) => {
  const { id } = useParams();

  const { data, error, isLoading, isError }  = useQuery(
    ["movie",{id: id}, "recommendations"],
    getRecommendations
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

   // Redundant, but necessary to avoid app crashing.
   const favorites = movies.filter(m => m.favorite)
   localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <Suspense fallback={<Spinner />}>
    <PageTemplate
      title="Recommended Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    </Suspense>
);
};

export default Recommended;