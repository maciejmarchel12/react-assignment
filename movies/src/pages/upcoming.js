import React, { lazy, Suspense } from "react";
import PageTemplate from '../components/templateMovieListPage'
// eslint-disable-next-line no-unused-vars
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { getUpcoming } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
// eslint-disable-next-line no-unused-vars
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
const AddToMustWatchIcon = lazy(() => import("../components/cardIcons/addToMustWatch"));

const Upcoming = (props) => {

  const { data, error, isLoading, isError } = useQuery('upcoming',getUpcoming);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results

  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('favourites', JSON.stringify(mustWatch))
  // eslint-disable-next-line no-unused-vars
  const addToMustWatch = (movieId) => true

/*   const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favourites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true */

  return (
    <Suspense fallback={<Spinner />}>
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
    />
    </Suspense>
  );
};
export default Upcoming;

// IMPORTANT COMMENT: already refactored to included caching in exercise 1

/* const Upcoming = (props) => {
  
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    getUpcoming().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
}; */
