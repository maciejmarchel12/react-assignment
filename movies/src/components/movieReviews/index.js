import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const MovieReviews = ({ reviews }) => {
  if (!Array.isArray(reviews)) {
    // If reviews is not an array, handle it accordingly
    return (
      <Box>
        <Typography variant="h5" component="h3">
          Reviews
        </Typography>
        <Typography variant="body1">
          No reviews available for this movie.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" component="h3">
        Reviews
      </Typography>
      {reviews.map((review) => (
        <Box key={review.id} sx={{ marginBottom: 2 }}>
          <Typography variant="h6">{review.author}</Typography>
          <Typography variant="body2">{review.content}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MovieReviews;
