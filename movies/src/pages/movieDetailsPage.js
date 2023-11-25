import React, { lazy, Suspense } from "react";
import { useParams } from 'react-router-dom';
import PageTemplate from "../components/templateMoviePage";
// eslint-disable-next-line no-unused-vars
import { getMovie, getRecommendations, getSimilar } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant

const MovieDetails = lazy(() => import("../components/movieDetails/"));


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
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
};

const RecommendedMoviesLink = ({ movieId }) => {
  // eslint-disable-next-line no-unused-vars
  const recommendedLink = `/movies/${movieId}/recommended`;
}

const SimilarMoviesLink = ({ movieId }) => {
  // eslint-disable-next-line no-unused-vars
  const similarLink = `/movies/${movieId}/similar`;
}

export default MoviePage;