const GET_GENRES = 'genres/getGenres'
const GET_GENRE = 'genres/getGenre'

const getGenre = (genre) => ({
    type: GET_GENRE,
    genre
})

const getGenres = (genres) => ({
    type: GET_GENRES,
    genres
})

export const getGenreThunk = (genreId) => async (dispatch) => {
    const res = await fetch(`/api/genres/${genreId}`);
    if (res.ok) {
        const data = await res.json()
        if (data.errors) {
            return;
        }
        dispatch(getGenre(data))
    }
}

export const getGenresThunk = () => async (dispatch) => {
    const res = await fetch('/api/genres');

    if (res.ok) {
        const data = await res.json()
        if (data.errors) {
            return;
        }
        dispatch(getGenres(data))
    }
}

const initialState = {};

function genresReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GENRE: {
            const newState = {};
            newState.genre = action.genre;
            return newState;
        }
        case GET_GENRES: {
            const newState = {}
            action.genres.forEach( genre => {
                newState[genre.id] = genre;
            })
            return newState;
        }
        default:
            return state;
    }
}

export default genresReducer;
