import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [sortOption, setSortOption] = useState(""); // NEW 

  const genreId = Number(genreFilter);

  function compareByPopularity(a, b) {
    const popularityA = parseFloat(a.popularity);
    const popularityB = parseFloat(b.popularity);

    return popularityA - popularityB;
  }

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  // Sorting logic
  if (sortOption === "popularity.desc") {
    displayedMovies = displayedMovies.sort(compareByPopularity).reverse();
  } else if (sortOption === "popularity.asc") {
    displayedMovies = displayedMovies.sort(compareByPopularity);
  } else if (sortOption === "release_date.desc") {
    displayedMovies = displayedMovies.sort((a, b) => {
      return new Date(b.release_date) - new Date(a.release_date);
    });
  } else if (sortOption === "release_date.asc") {
    displayedMovies = displayedMovies.sort((a, b) => {
      return new Date(a.release_date) - new Date(b.release_date);
    });
  }

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "sort") setSortOption(value); // NEW
  };

  return (
    <Grid container sx={{ padding: '20px', backgroundColor: "lightgrey" }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;