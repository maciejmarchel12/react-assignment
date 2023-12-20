import React, { lazy, Suspense } from "react";
import PageTemplate from "../components/templateMoviePage";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/movies-api";
import Spinner from "../components/spinner";

const ReviewForm = lazy(() => import("../components/reviewForm"));

const WriteReviewPage = (props) => {
  const location = useLocation();
  const movieId = location.state.movieId;

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: movieId }],
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
    <PageTemplate movie={movie}>
      <ReviewForm movie={movie} />
    </PageTemplate>
    </Suspense>
  );
};

export default WriteReviewPage;