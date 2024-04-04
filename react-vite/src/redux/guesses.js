const POST_GUESS = 'guesses/postGuess'
const GET_GUESSES = 'guesses/getGuesses'
const RESET_GUESSES = 'guesses/resetGuesses'

const getGuesses = (guesses) => ({
    type: GET_GUESSES,
    guesses
})

const postGuess = (data) => ({
    type: POST_GUESS,
    guesses: data['guess'],
    result: data['result']
})

const resetGuesses = () => ({
    type: RESET_GUESSES
    
})

export const getGuessesThunk = () => async(dispatch) => {
    const res = await fetch(`/api/guesses`)

    if (res.ok) {
        const data = res.json()
        dispatch(getGuesses(data))
        return data
    }
}

export const postGuessThunk = (guess, userId) => async(dispatch) => {
    const res = await fetch(`/api/guesses/${userId}`, {
        method: 'POST',
        body: guess
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(postGuess(data))
        return data
    }
}

export const resetGuessesThunk = (id) => async(dispatch) => {
    const res = await fetch(`/api/guesses/${id}/reset`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(resetGuesses())
        return data
    }
}

const initialState = {}

function guessesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GUESSES: {
            const newState = {}
            action.guess.forEach(guess => {
                newState[guess.id] = guess
            })
            return newState
        }
        case POST_GUESS: {
            const newState = {...state}
            action.guesses.forEach(guess => {
                newState[guess.id] = guess
            })
            newState.result = action.result
            return newState
        }
        case RESET_GUESSES: {
            const newState = {}
            return newState
        }
        default:
            return state
    }
}

export default guessesReducer