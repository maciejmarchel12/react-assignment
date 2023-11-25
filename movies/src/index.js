import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";

// Lazy load for page components
const HomePage = lazy(() => import("./pages/homePage"));
const Upcoming = lazy(() => import("./pages/upcoming"));
const Trending = lazy(() => import("./pages/trending"));
const NowPlaying = lazy(() => import("./pages/nowPlaying"));
const TopRated = lazy(() => import("./pages/topRated"));
const Recommendations = lazy(() => import("./pages/recommended"));
const Similar = lazy(() => import("./pages/similarPage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoriteMoviesPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const Login = lazy(() => import("./components/firebase/login"));
const Register = lazy(() => import("./components/firebase/register"));
const Reset = lazy(() => import("./components/firebase/reset"));
const Dashboard = lazy(() => import("./components/firebase/dashboard"));

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
  <Suspense fallback={<div>Loading...</div>}>
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
  </Suspense>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);