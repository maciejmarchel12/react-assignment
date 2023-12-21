import React, { lazy, Suspense, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import Spinner from "../components/spinner";
import ReviewForm from "../components/reviewForm";
import { addMovieReview, getMovieReviews } from "../api/movies-api"; // Update import

const MovieReview = lazy(() => import("../components/movieReview"));

const MovieReviewPage = (props) => {
  const location = useLocation();
  const { movie } = location.state;
  const [reviews, setReviews] = useState([]);

  // Function to add a review
  const addReview = async (author, content) => {
    await addMovieReview(movie.id, author, content);
    // Refresh reviews after adding a new one
    const updatedReviews = await getMovieReviews(movie.id);
    setReviews(updatedReviews);
  };

  // Fetch pre-existing reviews
  useState(() => {
    const fetchReviews = async () => {
      const movieReviews = await getMovieReviews(movie.id);
      setReviews(movieReviews);
    };
    fetchReviews();
  }, [movie.id]);

  return (
    <Suspense fallback={<Spinner />}>
      <PageTemplate movie={movie}>
        <MovieReview reviews={reviews} />
        {/* Pass addReview function to the ReviewForm component */}
        <ReviewForm addReview={addReview} />
      </PageTemplate>
    </Suspense>
  );
};

export default MovieReviewPage;