import React, { lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import Spinner from "../components/spinner";
const MovieReview = lazy(() => import("../components/movieReview"));

const MovieReviewPage = (props) => {
  let location = useLocation();
  const {movie, review} = location.state;
  
  return (
    <Suspense fallback={<Spinner />}>
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
    </Suspense>
  );
};

export default MovieReviewPage;