import React, { useState} from "react";
import { Link } from 'react-router-dom';
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={{ ...root }} data-testid="genres">
  <li>
    <Chip label="Genres" sx={{ ...chip }} color="primary" />
  </li>
  {movie.genres.map((g, index) => (
    <li key={index}>
      <Chip label={g.name} sx={{ ...chip }} />
    </li>
  ))}
</Paper>

<Paper component="ul" sx={{ ...root }} data-testid="runtime">
  <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
</Paper>

<Paper component="ul" sx={{ ...root }} data-testid="revenue">
  <Chip
    icon={<MonetizationIcon />}
    label={`${movie.revenue.toLocaleString()}`}
  />
</Paper>

<Paper component="ul" sx={{ ...root }} data-testid="votes">
  <Chip
    icon={<StarRate />}
    label={`${movie.vote_average} (${movie.vote_count})`}
    data-testid="vote-average"
  />
  <Chip label={`Released: ${movie.release_date}`} data-testid="release-date" />
</Paper>

<Paper component="ul" sx={{ ...root }} data-testid="production-countries">
      <li>
        <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
      </li>
        {movie.production_countries.map((pc, index) => (
      <li key={index}>
        <Chip label={pc.name} sx={{ ...chip }} />
      </li>
          ))}
        </Paper>
        {/* Similar Link */}
        <Link to={`/movies/${movie.id}/similar`} style={{ textDecoration: 'none' }}>
       <Fab
        color="secondary"
        variant="extended"
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '23em'
        }}
        data-testid="similar-button" // Added data-testid attribute
        >
    <NavigationIcon />
    Similar
  </Fab>
</Link>

<Link to={`/movies/${movie.id}/recommended`} style={{ textDecoration: 'none' }}>
  <Fab
    color="primary"
    variant="extended"
    sx={{
      position: 'fixed',
      bottom: '1em',
      right: '10em'
    }}
    data-testid="recommended-button" // Added data-testid attribute
  >
    <NavigationIcon />
    Recommended
  </Fab>
</Link>

<Fab
  color="secondary"
  variant="extended"
  onClick={() => setDrawerOpen(true)}
  sx={{
    position: 'fixed',
    bottom: '1em',
    right: '1em'
  }}
  data-testid="reviews-button" // Added data-testid attribute
>
  <NavigationIcon />
  Reviews
</Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;