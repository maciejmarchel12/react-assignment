import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query";
import { getSimilar } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";
import PageTemplate from "../components/templateMovieListPage";

const Similar = (props) => {
  const { id } = useParams();

  const { data, error, isLoading, isError }  = useQuery(
    ["movie",{id: id}, "recommendations"],
    getSimilar
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
    <PageTemplate
      title="Similar Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};

export default Similar;