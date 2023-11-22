import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getRecommendations, getSimilar } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant


const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
          {/* Add a link to the recommended page */}
          <RecommendedMoviesLink movieId={id} />
          <SimilarMoviesLink movieId={id} />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

const RecommendedMoviesLink = ({ movieId }) => {
  const recommendedLink = `/movies/${movieId}/recommended`;
}

const SimilarMoviesLink = ({ movieId }) => {
  const similarLink = `/movies/${movieId}/similar`;
}

export default MoviePage;