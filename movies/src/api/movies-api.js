
export const getMovies = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getUpcoming = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovie = async (args) => {
  const [, idPart] = args.queryKey || {};
  // Check if idPart is defined before trying to destructure
  if (!idPart) {
    throw new Error('Invalid queryKey: missing id');
  }
  const { id } = idPart;

  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Invalid content type. Expected JSON.');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching movie:', error.message);
    throw error;
  }
};

export const getGenres = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/genre', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getMovieImages = async ({ queryKey }) => {
  try {
   // const [_, { id }] = queryKey;
   const [, idPart] = queryKey;
   const { id } = idPart;
   //const id = queryKey;

    console.log("Movie ID:", id);
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${id}/images`
    );

    if (!response.ok) {
      console.error('Error fetching movie images:', response.status, response.statusText);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error('Invalid content type. Expected JSON.');
      throw new Error('Invalid content type. Expected JSON.');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching movie images:', error.message);
    throw error;
  }
};



export const getMovieReviews = async (movieId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${movieId}/review`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getTopRated = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/top_rated', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getTrending = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/popular', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getSimilar = async (movieId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${movieId}/similar`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getRecommendations = async (movieId) => {
  const response = await fetch(
    `http://localhost:8080/api/movies/tmdb/movie/${movieId}/recommendations`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

export const getNowPlaying = async () => {
  const response = await fetch(
    'http://localhost:8080/api/movies/tmdb/now_playing', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  )
  return response.json();
};

  export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const addMovieReview = async (movieId, author, content, rating) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/movies/tmdb/movie/${movieId}/reviews`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': window.localStorage.getItem('token'),
        },
        body: JSON.stringify({
          author: author,
          content: content,
          rating: rating,
        }),
      }
    );

    if (!response.ok) {
      throw new Error((await response.json()).message);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};