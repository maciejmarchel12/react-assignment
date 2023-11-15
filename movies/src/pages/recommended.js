import React from "react";
import PageTemplate from "../components/templateMoviePage";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getRecommendations } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToMustWatch";

const Recommendations = (props) => {
  const location = useLocation();
  const movieId = location.state.movieId;

  const { data: movies, error, isLoading, isError } = useQuery(
    ["movie", { id: movieId }],
    getRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
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

export default Recommendations;