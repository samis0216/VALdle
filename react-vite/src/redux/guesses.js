const POST_GUESS = 'guesses/postGuess'
const GET_GUESSES = 'guesses/getGuesses'

const getGuesses = (guesses) => ({
    type: GET_GUESSES,
    guesses
})

const postGuess = (guess) => ({
    type: POST_GUESS,
    guess
})

export const getGuessesThunk = () => async(dispatch) => {
    const res = await fetch(`/api/guesses`)

    if (res.ok) {
        const data = res.json()
        dispatch(getGuesses(data))
        return data
    }
}

export const postGuessThunk = (guess) => async(dispatch) => {
    const res = await fetch(`/api/guesses`, {
        method: 'POST',
        body: guess
    })

    if (res.ok) {
        const data = res.json()
        dispatch(postGuess(data))
    }
}
