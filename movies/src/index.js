import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Upcoming from "./pages/upcoming";
import Trending from "./pages/trending";
import NowPlaying from "./pages/nowPlaying";
import TopRated from "./pages/topRated";
import Recommendations from "./pages/recommended";
import Similar from "./pages/similarPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
//Firebase Auth Imports
import Login from "./components/firebase/login";
import Register from "./components/firebase/register";
import Reset from "./components/firebase/reset";
import Dashboard from "./components/firebase/dashboard";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/movies/trending" element={<Trending />} />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/upcoming" element={ <Upcoming /> } />
        <Route path="/movies/nowPlaying" element={ <NowPlaying /> } />
        <Route path="/movies/topRated" element={ <TopRated /> } />
        <Route path="/movies/:id/recommended" element={ <Recommendations /> } />
        <Route path="/movies/:id/similar" element={ <Similar /> } />
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/movies/homePage" element={<HomePage />} />
        <Route exact path ="/" element={<Login/>} />
        <Route exact path ="/register" element={<Register/>} />
        <Route exact path ="/reset" element={<Reset/>} />
        <Route exact path ="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);