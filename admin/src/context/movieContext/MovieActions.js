// Get Movie
export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies,
});

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});

// Create Movie
export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
});

export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
});

export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
});

// Upload Movie
export const uploadMovieStart = () => ({
    type: "UPLOAD_MOVIE_START",
});

export const uploadMovieSuccess = (movie) => ({
    type: "UPLOAD_MOVIE_SUCCESS",
    payload: movie,
});

export const uploadMovieFailure = () => ({
    type: "UPLOAD_MOVIE_FAILURE",
});

// Delete Movie
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
});

export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
});

export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
});
