//  export const getMovies = () => {
//      return fetch(
//        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//      ).then((response) => {
//        if (!response.ok) {
//          throw new Error(response.json().message);
//        }
//        return response.json();
//     })
//     .catch((error) => {
//         throw error
//      });
//    };
  
// export const getMovie = (args) => {
//     console.log(args)
//      const [, idPart] = args.queryKey;
//      const { id } = idPart;
//      return fetch(
//        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//      ).then((response) => {
//        if (!response.ok) {
//          throw new Error(response.json().message);
//        }
//        return response.json();
//      })
//      .catch((error) => {
//        throw error
//     });
//    };
  
//   export const getGenres = async () => {
//     return fetch(
//       "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
//         process.env.REACT_APP_TMDB_KEY +
//         "&language=en-US"
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//    });
//   };
  
//   export const getMovieImages = ({ queryKey }) => {
//     const [, idPart] = queryKey;
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     ).then( (response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
  
//     })
//     .catch((error) => {
//       throw error
//    });
//   };

//   export const getMovieReviews = (id) => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         // console.log(json.results);
//         return json.results;
//       });
//   };

//   export const getUpcoming = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(response.json().message);
//         }
//         return response.json();
//       })
//       .catch((error)=> {
//         throw error
//       });
//   }

//   //Trending STATIC ENDPOINT API
//   export const getTrending = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     )
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((errorData) => {
//           throw new Error(errorData.message || 'Failed to fetch latest movies');
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };

//   //Now Playing STATIC ENDPOINT API
//   export const getNowPlaying = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     )
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((errorData) => {
//           throw new Error(errorData.message || 'Failed to fetch latest movies');
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };

//   //TOP RATED STATIC ENDPOINT API
//   export const getTopRated = () => {
//     return fetch(
//       `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
//     )
//     .then((response) => {
//       if (!response.ok) {
//         return response.json().then((errorData) => {
//           throw new Error(errorData.message || 'Failed to fetch latest movies');
//         });
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error;
//     });
//   };

// //RECOMMENDED MOVIES API
//   export const getRecommendations = (args) => {
//     const [, idPart] = args.queryKey
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
//     )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//     })
//   };

//   export const getSimilar = (args) => {
//     const [, idPart] = args.queryKey
//     const { id } = idPart;
//     return fetch(
//       `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
//     )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(response.json().message);
//       }
//       return response.json();
//     })
//     .catch((error) => {
//       throw error
//     })
//   };