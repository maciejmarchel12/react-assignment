import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import {
    getUpcoming,
    getGenres,
    getMovies,
    getTrending,
    getNowPlaying,
    getTopRated,
    getMovie,
    getMovieImages,
    getSimilar,
    getMovieReviews,
    getRecommendations
  } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}));

// Get movie details
router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    // Parallel execution of counting movies and getting movies using movieModel
    const [total_results, results] = await Promise.all([
        movieModel.estimatedDocumentCount(),
        movieModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

router.get('/tmdb/upcoming', asyncHandler(async (req, res) => {
    const upcomingMovies = await getUpcoming();
    res.status(200).json(upcomingMovies);
}));

router.get('/tmdb/genre', asyncHandler(async (req, res) => {
    const genres = await getGenres();
    res.status(200).json(genres);
}));

router.get('/tmdb/movie', asyncHandler(async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}));

router.get('/tmdb/popular', asyncHandler(async (req, res) => {
    const trending = await getTrending();
    res.status(200).json(trending);
}));

router.get('/tmdb/now_playing', asyncHandler(async (req, res) => {
    const nowPlaying = await getNowPlaying();
    res.status(200).json(nowPlaying);
}));

router.get('/tmdb/top_rated', asyncHandler(async (req, res) => {
    const topRated = await getTopRated();
    res.status(200).json(topRated);
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movie = await getMovie(id);
    res.status(200).json(movie);
}));

router.get('/tmdb/movie/:id/images', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieImages = await getMovieImages(id);
    res.status(200).json(movieImages);
}));

router.get('/tmdb/movie/:id/similar', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const similar = await getSimilar(id);
    res.status(200).json(similar);
}));

router.get('/tmdb/movie/:id/reviews', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const movieReviews = await getMovieReviews(id);
    res.status(200).json(movieReviews);
}));

router.get('/tmdb/movie/:id/recommendations', asyncHandler(async (req, res) => {
    const { id } = req.params;
    const recommendations = await getRecommendations(id);
    res.status(200).json(recommendations);
}));

export default router;