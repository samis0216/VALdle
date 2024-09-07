const POST_LIKED = 'liked/postLike'
const GET_LIKED = 'liked/getLiked'
const RESET_LIKED = 'liked/resetLiked'

const getLiked = (liked) => ({
    type: GET_LIKED,
    liked
})

const resetLiked = () => ({
    type: RESET_LIKED,
})

const postLiked = (newLiked) => ({
    type: POST_LIKED,
    newLiked
})

export const getLikesThunk = () => async(dispatch) => {
    const res = await fetch('/api/likes')

    if (res.ok) {
        const data = res.json()
        dispatch(getLiked(data))
        return data
    }
}

export const resetLikesThunk = () => async(dispatch) => {
    const res = await fetch('/api/likes/reset')

    if (res.ok) {
        const data = res.json()
        dispatch(resetLiked(data))
        return data
    }
}

export const postLikesThunk = () => async(dispatch) => {
    const res = await fetch('/api/likes/new')

    if (res.ok) {
        const data = res.json()
        dispatch(postLiked(data))
        return data
    }
}

const initialState = {}

export default function likedReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LIKED: {
            const newState = {}
            action.liked.forEach(like => {
                newState[like.id] = like
            })
            return newState
        }
        case RESET_LIKED: {
            const newState = {}
            return newState
        }
        // case POST_LIKED: {
        //     const newState = {...state}
        //     newState[action.newLiked.id] = action.newLiked
        //     return newState
        // }
        // default:
        //     return state
    }
}
