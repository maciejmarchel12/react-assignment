import fetch from 'node-fetch';

export const getUpcoming = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};


export const getGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_KEY}&language=en-US`
        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
  };

  export const getMovies = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`

        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
  };

  export const getTrending = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`

        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
  };

  export const getNowPlaying = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`

        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
  };

  export const getTopRated = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`

        );

        if (!response.ok) {
            throw new Error(response.json().message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
  };

//parameterized apis

  export const getMovie = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_KEY}`
        );

        if (!response.ok) {
            throw new Error((await response.json()).message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieImages = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.TMDB_KEY}`
        );

        if (!response.ok) {
            throw new Error((await response.json()).message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getSimilar = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.TMDB_KEY}`
        );

        if (!response.ok) {
            throw new Error((await response.json()).message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getMovieReviews = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.TMDB_KEY}`
        );

        if (!response.ok) {
            throw new Error((await response.json()).message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const getRecommendations = async (id) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.TMDB_KEY}&page=1`
        );

        if (!response.ok) {
            throw new Error((await response.json()).message);
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};